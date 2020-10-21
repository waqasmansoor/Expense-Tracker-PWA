import React,{useContext} from 'react'
import {ContextTransaction} from '../context/GlobalContext';
import './Balance.css'

const Balance=()=>{
    const {transactions}=useContext(ContextTransaction)
    const balance=transactions.map(transaction=>transaction.amount)
                            .reduce((acc,item)=>(acc+=item),0).toFixed(2)


    const amount=transactions.map(transaction=>transaction.amount)
    const income=amount.filter(item=>item>0)
        .reduce((acc,item)=>(acc+=item),0)
        .toFixed(2)
        const expense=amount.filter(item=>item<0)
        .reduce((acc,item)=>(acc+=item),0)
        .toFixed(2)
    return(
        <div className='balance_container'>  

            <h4>{balance}</h4>
            <div className="inc_exp_container">
                <div>
                    <span id="income_text">Income</span><br/>
                    <span>{income}</span>
                </div>
                <div>
                    <span id='expense_text'>Expense</span><br/>
                    <span>{expense}</span>
                </div>
            </div>
        </div>
    )
}


export default Balance