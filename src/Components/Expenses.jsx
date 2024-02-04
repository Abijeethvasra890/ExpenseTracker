import React, { useState } from 'react'
import '../styles/expenses.css'

const Expenses = ({expenses, setExpenses, income, setIncome, expense, setExpense,savings, setSavings, balance, setBalance }) => {

    const [expenseModal, setExpenseModal] = useState(false)
    const [newExpense, setNewExpense] = useState(0);
    const [newExpenseTitle, setNewExpenseTitle] = useState('')
    const [expenseType, setExpenseType] = useState('')

    const handleExpenseModal = () => {
        setExpenseModal(true)
    }

    const handleAddExpense = () =>{
        // Validate if the entered amount is a number
        const parsedExpense = parseInt(newExpense);
        if (isNaN(parsedExpense) || parsedExpense <= 0) {
            window.alert('Please enter a valid expense amount.');
            return;
        }
        
        // Update income, expense, and balance
        if(expenseType === "Expense"){
            setExpense(expense + parsedExpense);
        }else if(expenseType === "Savings"){
            setSavings(savings + parsedExpense)
        }

       
        
        if (income > parsedExpense) {
            //setIncome(income - parsedExpense);
            const newExpenseObj = {
                title: newExpenseTitle,
                amount: parsedExpense,
                category: expenseType,
                date: new Date().toLocaleDateString(),
            };
    
            // Update the expenses state with the new expense
            setExpenses([...expenses, newExpenseObj]);
            console.log('hi')
            setBalance(balance - parsedExpense)
    
        } else {
            window.alert('Insufficient Balance');
        }

        // Close the modal
        setExpenseModal(false);
    }

  return (
    <>
    <div>Expenses</div>
    <button onClick={()=>handleExpenseModal()}>Add Expense</button>
    {expenseModal && 
     <div className="modal-overlay">
        <div className='modal-container'>
            <label>Expense Title: </label>
            <input type='text' onChange={(e)=>{setNewExpenseTitle(e.target.value)}}></input>
            <label>Expense: </label>
            <input type='number' onChange={(e)=>{setNewExpense(e.target.value)}}></input>
            
            <select onChange={(e)=>{setExpenseType(e.target.value)}} >  
                <option> ---Choose Expense Type--- </option>  
                <option> Expense </option>  
                <option> Savings </option>  
            </select>  
            <div className="button-container">
                <button onClick={()=>{handleAddExpense()}}>Add</button>
                <button onClick={()=>{setExpenseModal(false)}}>Cancel</button>
            </div>
        </div>
     </div>
    }
    <div>
        <h3>Expense List:</h3>
        <div className='expenses-container'>
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
           
              <div key={index} className={`expense-card ${expense.category.toLowerCase()}`}>
                <h4>{expense.title}</h4>
                <p>Amount: Rs {expense.amount}</p>
                <p>Type: {expense.category}</p>
                <p>Date: {expense.date}</p>
              </div>
           
          ))
        ) : (
          <p>No expenses yet.</p>
        )}
         </div>
      </div>
    </>

  )
}

export default Expenses