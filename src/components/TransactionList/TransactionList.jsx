import "./TransactionList.css";
import TransactionItem from "./TransactionItem";

function TransactionList({transactions , onDeleteTransaction , onEdit}){
    return(
        <section className="transaction-list">
            <ul>
            {
                transactions.map( (transaction)=> (
                    <TransactionItem 
                    key={transaction.id}
                    transaction={transaction}
                    onDeleteTransaction={onDeleteTransaction}
                    onEdit={onEdit}
                    />
                ))
            }
            </ul>
        </section>
    );
}

export default TransactionList;