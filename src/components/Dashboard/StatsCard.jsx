import "./StatsCard.css";

function  StatsCard ({title , value}){
    return(
        <div className="stats-card">
            <h3>{title}</h3>
            <p>
  {title === "Total Transactions" ? value : `₹${value}`}
</p>
        </div>
    );
}
export default StatsCard;