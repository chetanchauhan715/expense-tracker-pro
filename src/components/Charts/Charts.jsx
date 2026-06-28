import {
    PieChart, Pie, Cell,
    Tooltip, Legend,
    BarChart, Bar,
    XAxis, YAxis,
    CartesianGrid
  } from "recharts";


function Charts({categoryStats}){
    
   const pieData =  Object.entries(categoryStats).map( ([category , value]) =>{
        return {
            name:category ,
            value
        };
    });

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

    return (
        <div style={ {display:"flex", justifyContent:"center"}}>
            <PieChart width={400} height={400}>
                <Pie
                    data={pieData}
                    datakey="value"
                    namekey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    label
                    >

                        {pieData.map( (_, index) =>(
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}

                </Pie>
                <Tooltip />
        <Legend />
            </PieChart>

            <BarChart width={500} height={300} data={pieData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>

        </div>
    );

 }
    
    export default Charts;

    
