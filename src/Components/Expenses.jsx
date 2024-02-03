import React, { useState } from 'react'

const Expenses = ({expenses, setExpenses, income,setIncome, expense, setExpense,savings, setSavings, balance, setBalance }) => {

    const [expenseModal, setExpenseModal] = useState(false)
    const [newExpense, setNewExpense] = useState(0);

    const handleExpenseModal = () => {
        setExpenseModal(true)
    }

    const handleAddExpense = () =>{
        setExpense(parseInt(expense)+parseInt(newExpense))
        setIncome(income - newExpense)
        setExpenseModal(false)
    }

  return (
    <>
    <div>Expenses</div>
    <button onClick={()=>handleExpenseModal()}>Add Expense</button>
    {expenseModal && 
        <div>
            <label>Expense: </label>
            <input type='number' onChange={(e)=>{setNewExpense(e.target.value)}}></input>
            <button onClick={()=>{handleAddExpense()}}>Add</button>
        </div>
    }
    </>

  )
}

export default Expenses