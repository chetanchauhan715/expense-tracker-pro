import "./TransactionList.css";
import TransactionItem from "./TransactionItem";

function TransactionList({transactions}){
    return(
        <section className="transaction-list">
            <ul>
            {
                transactions.map( (transaction)=> (
                    <TransactionItem 
                    key={transaction.id}
                    transaction={transaction}
                    />
                ))
            }
            </ul>
        </section>
    );
}

export default TransactionList;