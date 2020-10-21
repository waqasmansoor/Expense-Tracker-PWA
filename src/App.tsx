import React,{useEffect} from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import GlobalProvider from './context/GlobalContext';
import TransactionList from './components/TransactionList'
import Balance from './components/Balance'
import InitNotification from './services/firebaseService'


function App() {
  useEffect(()=>{
     
    async function getToken(){
      
    InitNotification()
    
    }
    
    getToken()
    
  },[])
  return (
    <GlobalProvider>
      <div className="container">
        
        <Balance/>
        <TransactionList/>
        <AddTransaction/>
      
      </div>
    </GlobalProvider>
    
  );
}

export default App;
