import StatsCard from "./StatsCard";
import "./Dashboard.css";


function Dashboard({totalIncome , totalExpense , balance , totalTransactions}) {

  // const income = transactions.reduce( (acc,transaction) => {
  //   if(transaction.type === "income"){
  //     return acc + Number(transaction.amount);
  //   }
  //   return acc;
  // } , 0);


  // const expense = transaction s.reduce( (acc, transaction)=>{
  //   if(transaction.type === "expense"){
  //     return acc + Number(transaction.amount);
  //   }
  //   return acc;
  // }, 0) ;

  // const balance = income - expense;

  // const totalTransactions = transactions.length ;

  return (
    <section className="dashboard">
      <StatsCard title="Balance" value={balance} />

      <StatsCard title="Income" value={totalIncome} />

      <StatsCard title="Expense" value= {totalExpense} />

      <StatsCard title="Total Transactions" value={totalTransactions} />
    </section>
  );
}
export default Dashboard;
