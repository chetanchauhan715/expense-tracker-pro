import { useState , useEffect } from "react";
import "./TransactionForm.css";
import { useFormState } from "react-dom";

function TransactionForm ( {onAddTransaction , editingTransaction, onUpdateTransaction}){

    const [formData , setFormData] = useState ( {
        title:"",
        amount:"",
        category:"",
        date:"",
        type:""
    });

    function handleChange(e){
        setFormData({
            ...formData , 
            [e.target.name] : e.target.value
        }

        );
    }

    function handleSubmit(e){
        e.preventDefault();

        if(Object.values(formData).some ((value)=> String(value).trim()==="")){
            alert("Please Fill all filels.");
            return;
        }
        
        if(editingTransaction){
            onUpdateTransaction(formData);
        } else {
            onAddTransaction(formData);
        }
    
        setFormData({
            title: "",
            amount: "",
            category: "",
            date: "",
            type: ""
        });
    
        
        
    }

    useEffect( () => {
        if(editingTransaction){
            setFormData(editingTransaction);
        }
    } , [editingTransaction])
    

    return(
        <section className="form">
            <form className="form-input" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter Title"
                name = "title"
                value={formData.title}
                onChange={handleChange}
                />


                <input
                type="number"
                placeholder="Enter Amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                />

                <select 
                name="category"
                value={formData.category}
                onChange={handleChange}
                >
                    <option value="">Select Category</option>
                    <option value="food">Food</option>
                    <option value="transport">Traansport</option>
                    <option value="shopping">Shopping</option>
                    <option value="bills">Bills</option>
                    <option value="salary">Salary</option>
                    <option value="entertainmnet">Entertainment</option>
                    <option value="heathcare">HeathCare</option>
                    <option value="other">Other</option>
                </select>


                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                />

            <div className="type-buttons">
                <label>
                <input
                type="radio"
                name="type"
                value="income"
                onChange={handleChange}
                checked={formData.type === "income"} 
                />
                Income
                </label>

                <label>
                    <input 
                    type="radio"
                    name="type"
                    value="expense"
                    onChange={handleChange}
                    checked={formData.type === "expense"}
                    />
                    Expense
                </label>

                </div>

                <button type="submit">
                    {editingTransaction ? "Update Transaction" : "Add Transaction"}
                </button>

            </form>
        </section>
    );
}

export default TransactionForm;