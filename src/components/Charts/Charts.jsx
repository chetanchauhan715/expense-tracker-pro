import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Charts({categoryStats , expenseTotal , incomeTotal}){
    const data = Object.entries(categoryStats).map(([category, amount]) => ({
        name: category,
        value: amount
      }));
    
      const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];
    
      return (
        <div>
          <h2>Expense Breakdown</h2>
    
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
    
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      );
    }
    
    export default Charts;

    
