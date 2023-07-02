import Expenses from "./components/outputExpense/Expenses";
import NewExpense from "./components/inputExpense/NewExpense";
import { useState } from "react";
const dummy_expenses = [
  {
    id:1,
    name: "v1",
    date: new Date(2020,7,14),
    price: 500
  }
  ,
  {
    id:2,
    name: "v2",
    date: new Date(2019,7,15),
    price: 520
  },
  {
    id:3,
    name: "v3",
    date: new Date(2022,8,20),
    price: 800
  }

]
function App() {
  const [expenses, setExpenses] = useState(dummy_expenses)

  const saveExpenseHandler = (expenseData)=>{

       setExpenses((prev)=>{
        return [expenseData, ...prev]
        }
        );
  };

  console.log(dummy_expenses)

  return (
    <div>
    <NewExpense onSaveExpense = {saveExpenseHandler}/>
    <Expenses items = {expenses} />
    </div>
  );


};

export default App;
