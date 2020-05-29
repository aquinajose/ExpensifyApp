import {createStore} from 'redux';

const incrementCount=({incrementBy=1}={})=>({
  type:'INCREMENT',
  incrementBy
})
const decrementCount=({decrementBy=1}={})=>({
  type:"DECREMENT",
  decrementBy
})
const resetCount=({count=0}={})=>({
  type:'RESET',
  count
})
const setCount=({count=300}={})=>({
  type:'SET',
  count
})
const countReducer=(state={count:0},action)=>{
    switch(action.type){
      case "INCREMENT":
       return {
         count:state.count+action.incrementBy
       }
      case "DECREMENT":
        return {
          count:state.count-action.decrementBy
        }
      case "RESET":
        return {
          count:action.count
        }
      case "SET":{
        return {
          count:action.count
        }
      }
      default :
       return state
    }
}
const store=createStore(countReducer);


const unsubsrcibe=store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}))


store.dispatch(resetCount({count:50}));
store.dispatch(setCount({count:101}))

