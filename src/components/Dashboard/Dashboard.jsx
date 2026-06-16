import StatsCard from "./StatsCard";
import "./Dashboard.css";


function Dashboard() {
  return (
    <section className="dashboard">
      <StatsCard title="Balance" value="$25,000" />

      <StatsCard title="Income" value="$75,000" />

      <StatsCard title="Expense" value="$50,000" />

      <StatsCard title="Savings" value="$25,000" />
    </section>
  );
}
export default Dashboard;
