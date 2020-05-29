//import uuid from 
import {addExpense, editExpense,removeExpense} from '../../actions/expenses';

test('should set up remove expense objecr',()=>{
    const action = removeExpense({id:'123'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123'
    })
})

test('should set up edit expense object',()=>{
    const action = editExpense('123456',{amount:40});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123456',
        updates:{
            amount:40
        }
    })
})

test('should set up add expense with any input values',()=>{
    const addTest = {
     description:'any',
    note:'New note',
    amount:50,
    createdAt:0  
    }
    const action = addExpense(addTest);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        id:expect.any(String),
        ...addTest}
    })
})

test('should set up add expense without any input values',()=>{
    const addTest = {
     description:'',
    note:'',
    amount:0,
    createdAt:0
    }
    const action = addExpense({});
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        id:expect.any(String),
        ...addTest}
    })
})