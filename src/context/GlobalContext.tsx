import React, { createContext, useReducer } from 'react'
import {trans_type} from '../services/types/Types'
import AppReducer from '../context/AppReducer'

const initState={
    transactions:[
        {
            text:'',
            amount:0,
            id:0,
        },
    ],
    add_func:(t:trans_type)=>{},
    sub_func:(id:number)=>{},
}

export const ContextTransaction=createContext(initState)
var count=0

const GlobalProvider:React.FC=({children})=>{
    const [state,action]=useReducer(AppReducer,initState)
    


    function addTransaction(transaction:trans_type){
        count+=1
        transaction.id=count
        
      action({
             type:'ADD',
             payload:transaction,
             
         })
      
    }
    function deleteTransaction(id:number){
        action(
            {
                type:'DEL',
                payload:{text:'',amount:0,id:id},
                
            }
        )
    }
    
    
    return(<ContextTransaction.Provider value={{
         transactions:state.transactions,
        
        add_func:(t:trans_type)=>addTransaction(t),
        sub_func:(id:number)=>deleteTransaction(id)
    }}>
        {children}
        </ContextTransaction.Provider>)

    
}


export default GlobalProvider
