import ExpenseFilter from "../inputExpense/ExpenseFilter";
import './Expenses.css'
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ChartInput from "../Chart/ChartInput";

function Expenses(props){

  const [fil, setFilYear] = useState('2020')
    const changeFilterHandler = (select)=>{
      setFilYear(select)
  }

  const fil_y =props.items.filter(expense=>{return expense.date.getFullYear().toString()===fil})
  

  
    return (
        <div className="expenses">
          <ChartInput vals = {fil_y}/>
          <ExpenseFilter selectedyear ={fil}  onChangeFilter={changeFilterHandler}/>
          <ExpenseList items = {fil_y}/>
        </div>
      );
}

export default Expenses;