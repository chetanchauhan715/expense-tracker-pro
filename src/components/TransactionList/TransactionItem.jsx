import "./TransactionItem.css";

function TransactionItem({transaction}){

    return(
        <li className="transaction-item">
            <div className="left">
              <h3>  {transaction.title} </h3>
             <p>  {transaction.category} </p> 
            </div>

            <div className="right">
               <h3> {transaction.amount} </h3>
               <p> {transaction.date} </p>
            </div>
        </li>
    )
}

export default TransactionItem;