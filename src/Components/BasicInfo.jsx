import React, { useState } from 'react'
import Expenses from './Expenses'
import '../styles/basicInfo.css'

const BasicInfo = ({income, expense, savings, balance,setBalance, setIncome}) => {
   
    const [newIncome, setnewIncome] = useState(0)
    const [incomeModal, setIncomeModal] = useState(false)
   
    const handlesetIncomeModal = () =>{
        setIncomeModal(true)
    }

    const handlesetIncome = () =>{
       
        setIncome(newIncome)
        setBalance(newIncome)
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
        <div className="modal-overlay">
            <div className='modal-container'>
                <label>Enter Income: </label>
                <input 
                    type='number'
                    onChange={(e)=>setnewIncome(e.target.value)}></input>
                <button onClick={()=>handlesetIncome()}>Set</button>
                <button onClick={()=>{setIncomeModal(false)}}>Cancel</button>
            </div>
        </div>
        }
    </>
  )
}

export default BasicInfo