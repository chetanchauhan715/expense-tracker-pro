import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Charts from "./components/Charts/Charts";
import StatsCard from "./components/Dashboard/StatsCard";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionList from "./components/TransactionList/TransactionList";


function App() {
  // main App Data
  const [transactions, setTransactions] = useState([]);

  // Loading State
  const [isLoaded, setIsLoaded] = useState(false);

  // UI State
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [searchText , setSearchText] = useState("");
  const[sortBy, setSortBy] = useState("latest");

  // Load Effect -------

  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }

    setIsLoaded(true);
  }, []);

  //Save Effect --------

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions, isLoaded]);

  function addTransaction(newTransaction) {
    const transaction = {
      ...newTransaction,
      id: Date.now(),
    };

    setTransactions((prev) => [...prev, transaction]);
  }

  function delelteTransaction(id) {
    const updatedTrasactions = transactions.filter(
      (transaction) => transaction.id !== id
    );

    setTransactions(updatedTrasactions);
  }

  // edit handler for passes transaction detaials as props
  function editTransaction(transaction) {
    setEditingTransaction(transaction);
  }

  function handleUpdate(updatedTransaction){
    console.log(updatedTransaction);
    const updatedTrasactions = transactions.map( (t)=> {
      if(t.id === updatedTransaction.id){
        return updatedTransaction;
      }
      return t;
    });

    setTransactions(updatedTrasactions);
    setEditingTransaction(null);
  }


  // filtring handle
  function handleSeach(e){
    setSearchText(e.target.value);
  }

  const filteredTransactions = transactions.filter( (t)=>{
    return t.title.toLowerCase().includes((searchText || "").toLowerCase());
  })


  function handleSort(e){
    setSortBy(e.target.value);
  }

  const sortedTransaction = [...filteredTransactions];
  if(sortBy === "latest"){
    sortedTransaction.sort( (a,b) => new Date(b.date) - new Date(a.date));
  } else if(sortBy === "oldest"){
    sortedTransaction.sort( (a, b) => new Date(a.date) - new Date(b.date));
  } else if(sortBy === "highest-amount"){
    sortedTransaction.sort( (a , b) => Number(b.amount) - Number(a.amount));
  } else if(sortBy === "lowest-amount"){
    sortedTransaction.sort( (a,b) => Number(a.amount) - Number(b.amount));
  }


  // statistics - Charts and Data 
  const expenseTransactions = transactions.filter( (t) => t.type === "expense");
  
  const expenseTotal = expenseTransactions.reduce( (total , transaction) => {
   return  total += Number (transaction.amount);
  } , 0);


  let highestExpenes = null;
  if(expenseTransactions.length > 0){
    highestExpenes = expenseTransactions[0];
    for(let i=1; i<expenseTransactions.length; i++){
      if(Number (expenseTransactions[i].amount) > Number(highestExpenes.amount)){
        highestExpenes = expenseTransactions[i];
      }
    }
  }


  let lowestExpense = null;
  if(expenseTransactions.length > 0){
    lowestExpense = expenseTransactions[0];
    for(let i=1; i<expenseTransactions.length; i++){
      if( Number(expenseTransactions[i].amount )< Number (lowestExpense.amount)){
        lowestExpense = expenseTransactions[i];
      }
    }
  }

  const categoryStats = {};

  for(let i=0; i<expenseTransactions.length; i++){
    const transaction = expenseTransactions[i];

    const amount = Number (transaction.amount);
    const category = transaction.category;

    categoryStats[category] = (categoryStats[category] || 0) + amount;
  }
  


  console.log(highestExpenes);
  console.log(lowestExpense);
  console.log(categoryStats);
  console.log(transactions[0].date);
 


  // Income
  const incomeTransactions = transactions.filter ( (t) => {
    return t.type === "income";
  });

  const incomeTotal = incomeTransactions.reduce( (total , transaction) => {
    return total + Number (transaction.amount);
  } , 0) ; 


  
  const balance = incomeTotal - expenseTotal ; 


  



  return (
    <div className="main-container">
      <Header />

      <Dashboard 
      totalIncome = {incomeTotal}
      totalExpense = {expenseTotal}
      balance ={balance}
      totalTransactions ={transactions.length}
      />

      <section className="controls">

        <div className="filtering">
          <label> 
             Search
          </label>
          <input type="text" 
          placeholder="Enter Search"
          value={searchText}
          onChange={handleSeach}/>
        </div>

        <div className="sorting">
        <select
        value={sortBy}
        onChange={handleSort}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="highest-amount">Highest Amount</option>
          <option value="lowest-amount">Lowest Amount</option>
        </select>
        </div>
      </section>


      <div className="middle-container">
        <div className="transactionForm-container">
          <TransactionForm
            onAddTransaction={addTransaction}
            editingTransaction={editingTransaction}
            onUpdateTransaction={handleUpdate}
          />
        </div>

        <div className="transactionList-container">
          <TransactionList
            transactions={sortedTransaction}
            onDeleteTransaction={delelteTransaction}
            onEdit={editTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
