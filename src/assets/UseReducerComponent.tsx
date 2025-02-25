import { useReducer } from "react";

const initialState = {
    counter : 50
}

type ACTIONTYPES =
   {type:"decrement",payload:number} 
  | {type:"increment",payload:number} ;
  

  
  function CounterReducer(state:typeof initialState ,action:ACTIONTYPES) {
    
   switch(action.type){
    case"increment":
    return {
     ...state,
     counter:state.counter + action.payload
    };

    case "decrement":
        return {
            ...state,
            counter:state.counter - action.payload
        }
     default:throw new Error("Bad Action")
}
    
 }
  








function UseReducerComponent() {
    const [state,dispatch] = useReducer(CounterReducer,initialState)
  return (
    <div>

        <div>{state.counter}</div>
        <div>
            <button onClick={()=>dispatch({
           type:"increment",
           payload:10
            })}>Increment</button>
        </div>
<div>
<button onClick={()=>dispatch({
           type:"decrement",
           payload:10
            })}>Decrement</button>
</div>

    </div>
  )
}

export default UseReducerComponent