import {trans_type} from '../services/types/Types'

export default (state:{transactions:trans_type[]},action:{type:string,payload:trans_type})=>{
    switch(action.type){
        case 'ADD':
            
            return {
                
            transactions:[action.payload,...state.transactions]  
    }
        case 'DEL':
            return{
                transactions:state.transactions.filter(
                    transaction=>transaction.id!==action.payload.id
                )
        }
        default:
            return state;
    }
}