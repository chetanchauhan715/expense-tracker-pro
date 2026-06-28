import "./TransactionItem.css";

function TransactionItem({transaction , onDeleteTransaction , onEdit}){

    function handleDelete(){
        onDeleteTransaction(transaction.id);
    }
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

            <button onClick={ ()=> onEdit(transaction)}>
                Edit
            </button>

            <button onClick={ handleDelete}>
                Delete
            </button>
        </li>
    )
}

export default TransactionItem;