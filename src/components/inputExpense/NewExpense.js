import FormExpense from "./FormExpense";
import './NewExpense.css'
import { useState } from "react";
const NewExpense = (props)=>{

    const [xpbutton, setcontent] = useState('');



    const expenseHandler = (newExpensedata)=>{
        const expensesData = {
            id: Math.random().toString(),
            ...newExpensedata
        }

        props.onSaveExpense(expensesData)

        setcontent('')



    }

const contentHandler = ()=>{
    const expbutton = (<FormExpense onSendExpense= {expenseHandler}/>)
    setcontent(expbutton);

}

const AddExpenses = <button onClick = {contentHandler}>Add Expenses</button>

    return(
    <div className="new-expense">
      {(xpbutton.length===0)?AddExpenses:xpbutton}
    </div>);

}

export default NewExpense;