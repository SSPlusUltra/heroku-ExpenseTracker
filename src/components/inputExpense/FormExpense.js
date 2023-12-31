import './FormExpense.css'
import { useState } from 'react';
const FormExpense = (props)=>{
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')



    const titleChangeHandler = (event)=>{
        setTitle(event.target.value)
 
    }

    const amountChangeHandler = (event)=>{
         setAmount(event.target.value)
    }

    const dateChangeHandler = (event)=>{
        setDate(event.target.value)
 
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            name: title,
            date: new Date(date),
            price: amount
        }

        props.onSendExpense(expenseData);
        
        setTitle('')
        setAmount('')
        setDate('')


    }
    

    return(
        <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={title} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={amount} onChange={amountChangeHandler} min = "0.01" step = "0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='Date' value={date} onChange={dateChangeHandler} min= "2019-01-01" max="2022-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
        </form>
    );
}

export default FormExpense;