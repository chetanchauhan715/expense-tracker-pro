import {
    PieChart, Pie, Cell,
    Tooltip, Legend,
    BarChart, Bar,
    XAxis, YAxis,
    CartesianGrid
  } from "recharts";

  import "./Charts.css"

function Charts({categoryStats}){
    
   const pieData =  Object.entries(categoryStats).map( ([category , value]) =>{
        return {
            name:category ,
            value
        };
    });

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

    return (
        <div className="charts-container">

  <div className="chart-card">
    <h2>Expense Distribution</h2>
    <PieChart width={400} height={400}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        label
      >
        {pieData.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>

  <div className="chart-card">
    <h2>Category Comparison</h2>
    <BarChart width={500} height={300} data={pieData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  </div>

</div>
    );

 }
    
    export default Charts;

    
