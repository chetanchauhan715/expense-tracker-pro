import { useState } from 'react'
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import StatsCard from './components/Dashboard/StatsCard';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionList from './components/TransactionList/TransactionList';

function App() {

  const [transactions , setTransactions] = useState([]);

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

    <div>
    
    <Header/>

    <Dashboard transactions={transactions}/>


<div>
    <TransactionForm 
    onAddTransaction ={addTransaction}
    />

    
</div>

<TransactionList transactions={transactions}
                onDeleteTransaction={delelteTransaction}
/>

    

    </div>
  ) ;
} 

export default App;
