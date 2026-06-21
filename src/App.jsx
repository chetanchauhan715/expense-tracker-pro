import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import StatsCard from "./components/Dashboard/StatsCard";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionList from "./components/TransactionList/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

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

  return (
    <div className="main-container">
      <Header />

      <Dashboard transactions={transactions} />

      <div className="middle-container">
        <div className="transactionForm-container">
          <TransactionForm
            onAddTransaction={addTransaction}
            editingTransaction={editingTransaction}
            // onUpdateTransaction={handleUpdate}
          />
        </div>

        <div className="transactionList-container">
          <TransactionList
            transactions={transactions}
            onDeleteTransaction={delelteTransaction}
            onEdit={editTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
