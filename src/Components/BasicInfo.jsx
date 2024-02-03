import React, { useState } from 'react'
import Expenses from './Expenses'
import '../styles/basicInfo.css'

const BasicInfo = ({income, expense, savings, balance, setIncome}) => {
   
    const [newIncome, setnewIncome] = useState(0)
    const [incomeModal, setIncomeModal] = useState(false)
   
    const handlesetIncomeModal = () =>{
        setIncomeModal(true)
    }

    const handlesetIncome = () =>{
        console.log('hi')
        setIncome(newIncome)
        setIncomeModal(false)
    }


  return (
    <>
    <div className='basicInfo-container'>
        <div className='title'>
            BasicInfo
        </div>
        <div className='content'>
            <income>
                Income: Rs {income}  
                <button className='setIncome' onClick={()=>handlesetIncomeModal()}>New Income</button>
            </income>
            <expenses>
                Expenses: Rs {expense}
            </expenses>
            <savings>
                Savings: Rs {savings}
            </savings>
            <balance>
                balance: Rs {balance}
            </balance>
        </div>
       
    </div>
     {incomeModal &&
        <div className='income-modal'>
            <label>Enter Income: </label>
            <input 
                type='number'
                onChange={(e)=>setnewIncome(e.target.value)}></input>
            <button onClick={()=>handlesetIncome()}>Set</button>
            <button onClick={()=>{setIncomeModal(false)}}>Cancel</button>
        </div>
        }
    </>
  )
}

export default BasicInfo