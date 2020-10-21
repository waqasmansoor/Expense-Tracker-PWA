import React, { useContext,useState } from 'react';
import {ContextTransaction} from '../context/GlobalContext';
import './AddTransaction.css'



const AddTransaction=()=>{
    
    const {add_func}=useContext(ContextTransaction)
    const [text,setText]=useState('')
    const [number,setNumber]=useState(0)
    
    const [numEmpty,setNumEmpty]=useState(true)
    const [textEmpty,setTextEmpty]=useState(true)
    

    const handleText=(e:React.FormEvent<HTMLInputElement>)=>{
        let str=e.currentTarget.value
        if(str.trim() || str.length!==0){
            setTextEmpty(false)
        }
        else{
            setTextEmpty(true)
        }
        setText(str)
        
        
        
    }
        
    const handleNumber=(e:React.FormEvent<HTMLInputElement>)=>{
        let num=e.currentTarget.value
        if(num.trim()|| num.length!==0){
            setNumEmpty(false)
        }
        else{
            setNumEmpty(true)
        }
        setNumber(parseInt(num,10))
         
    }
    const validate=(type:string)=>{
        
        

    
        
            if(text.match(/^[a-zA-Z]+$/)){
                if(!isNaN(number)){
                    if(type==='income'){
                        const transaction={
                            text:text,
                            amount:number,
                            id:0
                        }
                        add_func(transaction)
                    }
                    else if(type==='expense'){
                        const transaction={
                            text:text,
                            amount:-number,
                            id:0
                        }
                        add_func(transaction)
                    }
                }
                else{
                    
                    console.log('number error')
                }    
                    
            }
            else{
                
                console.log('text error')
            }
            
        }
        
        
        
        
    
            
    
    
    
    
    return(
        <div className='form_container'>
            <h3>Add New Transaction</h3>
        
            <label>Item</label>
            <input type='text' 
            required placeholder='Enter text'
            id='input'
            size={30}
            
            onChange={handleText}
            >
            </input>
            <label>Amount</label>
            <input 
            type='text' 
            required placeholder='Enter amount...'
            id='amount'
            size={30}
            onChange={handleNumber}
            >
            </input>
            <div className='button_container'>
                <button onClick={()=>validate('income')}
                disabled={(!textEmpty && !numEmpty)?false:true}
                className={`income_button ${(!textEmpty && !numEmpty)?'income_btn_working':''}`}
                ><span>Add Income</span></button>

                <button onClick={()=>validate('expense')}
                disabled={(!textEmpty && !numEmpty)?false:true}
                className={`expense_button ${(!textEmpty && !numEmpty)?'expense_btn_working':''}`}
                ><span>Add Expense</span></button>
            </div>
        
        </div>
    )

}

export default AddTransaction