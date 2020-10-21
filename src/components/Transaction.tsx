import React,{useContext} from 'react'
import {ContextTransaction} from '../context/GlobalContext';
import {trans_type} from '../services/types/Types'

const Transaction:React.FC<{transaction:trans_type}>=({transaction})=>{
    const {sub_func}=useContext(ContextTransaction)


    return(
        <div className={transaction.amount>0?'income_item':'expense_item'}
        key={transaction.id}>
            <div className="delete-btn"
                onClick={()=>
                sub_func(transaction.id)
                
            }
            >x</div>
            <span id="number">{transaction.amount}</span>
            <span id='text'>{transaction.text}</span>
        </div>
    )
}


export default Transaction