import {  useEffect, useState } from 'react'
import "./App.css";
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import StatsCard from './components/Dashboard/StatsCard';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionList from './components/TransactionList/TransactionList';

function App() {

  const [transactions , setTransactions] = useState([]);

  useEffect( ()=> {
    const savedTransactions = localStorage.getItem("transactions");
    if(savedTransactions){
      console.log("Loaded:", savedTransactions);
      setTransactions(JSON.parse(savedTransactions));
    }
  } , []);

  useEffect(() => {
    if (transactions.length > 0) {
      console.log("Saving:", transactions);
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);
  

  function addTransaction(newTransaction){
    
    const transaction = {
      ...newTransaction , 
      id:Date.now()
    } ;

   setTransactions( (prev)=>[
    ...prev , transaction
   ]);
  }

  function delelteTransaction(id){
   const updatedTrasactions =  transactions.filter( (transaction)=> (
      transaction.id !== id 
    ))

    setTransactions(updatedTrasactions);
  }

  
 
  return (

    <div className="main-container">
    
    <Header/>

    <Dashboard transactions={transactions}/>


<div className="middle-container">

<div className="transactionForm-container">
    <TransactionForm 
    onAddTransaction ={addTransaction}
    />
    
</div>

<div className="transactionList-container">
<TransactionList transactions={transactions}
                onDeleteTransaction={delelteTransaction}
/>
</div>

</div>

    </div>
  ) ;
} 

export default App;
