import React from 'react'
import BasicInfo from './BasicInfo'
import Expenses from './Expenses'
import { useState } from 'react'

const Content = () => {
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [savings, setSavings] = useState(0)
    const [balance, setBalance] = useState(0)
    const [expenses, setExpenses] = useState({})

  return (
    <div>
         <BasicInfo 
            income={income} 
            setIncome = {setIncome}
            expense={expense}
            savings={savings}
            balance={balance}
            />
         <Expenses 
            expenses = {expenses}
            setExpenses = {setExpenses}
            income = {income}
            setIncome = {setIncome}
            expense = {expense}
            setExpense = {setExpense}
            savings = {savings}
            setSavings = {setSavings}
            balance = {balance}
            setBalance = {setBalance}
         />
    </div>
  )
}

export default Content