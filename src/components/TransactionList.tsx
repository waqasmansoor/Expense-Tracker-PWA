import React, { useContext } from 'react'
import {ContextTransaction} from '../context/GlobalContext';
import Transaction from './Transaction'
import './TransactionList.css'

const TransactionList=()=>{
    const {transactions}=useContext(ContextTransaction)
    
    

    return(
        <div className='transaction_history'>
        <div className="inc_exp_title">
            <span id='inc_title'>Income</span>
            <span id='exp_title'>Expense</span>
        </div>
        <div className='income_container'>{
            transactions.map((transaction,i)=>{
               return (transaction.amount>0 && <Transaction
                transaction={transaction}
                />)

                
            })
        }
        </div>
        <div className='expense_container'>{
            transactions.map((transaction,i)=>{
                return (transaction.amount<0 && <Transaction
                transaction={transaction}
                />)

                
            })
        }
        </div>
        </div>
    )
}


export default TransactionList