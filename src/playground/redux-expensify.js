import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({description = '', note = '', amount = 0, createdAt = ''} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }

});
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': {
      return [
        ...state,
        action.expense]
    }
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
        return expense
      })
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)

    default:
      return state;
  }
}
const setTextFilter = (text) => ({
  type: 'SET_FILTER',
  text
});
//SORT_BY_DATE
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
const setStartDate =(date)=>({
  type:'SET_START_DATE',
  date
})
const setEndDate =(date)=>({
  type:'SET_END_DATE',
  date
})
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state, text: action.text

      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
    return {
        ...state,
        startDate:action.date
    }
    case 'SET_END_DATE':
    return {
      ...state,
      endDate:action.date
    }
    default:
      return state;
  }
}
const store = createStore(combineReducers(
  {
    expenses: expensesReducer,
    filters: filterReducer
  }
));
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
  return expenses.filter(expense=>{
    const startMatch= typeof startDate !=='number' || expense.createdAt>=startDate;
    const endMatch = typeof endDate !=='number' || expense.createdAt<=endDate;
    const textMatch=true;
    //const textMatch=expense.description.toLowerCase().includes(text);
     // if(expense.description.toLowerCase().includes(text)){
    //   return expense
    // }
    return startMatch && endMatch && textMatch
  }).sort((a,b)=>{
    if(sortBy==='date'){
      return a.createdAt<b.createdAt?1:-1
    }
    if(sortBy==='amount'){
      return a.amount<b.amount?1:-1
    }
  })
}
store.subscribe(() => {
  const state= store.getState();
 // console.log(state)
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
  console.log(visibleExpenses);
})
 const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100,createdAt:-211000 }))
 const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 ,createdAt:-1000}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

 //store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

 //store.dispatch(setStartDate(-1000));
 store.dispatch(setStartDate());
store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: "jdajd",
    description: 'January Rent',
    note: 'This was the last rent for that address',
    amount: 54500,
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //amount or date,
    startDate: undefined,
    endDate: undefined
  }
}

// const user={name:'Aquina',
// age:30};
// console.log({...user})