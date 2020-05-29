import expenseReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
    const state = expenseReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual([])
})

test('should remove Expense',()=>{
    const state=expenseReducers(expenses,{
        type:'REMOVE_EXPENSE',
        id:'123'
    })
    expect(state).toEqual([expenses[1],expenses[2]])
})

test('should not remove Expense if id is invalid',()=>{
    const state=expenseReducers(expenses,{
        type:'REMOVE_EXPENSE',
        id:'-1'
    })
    expect(state).toEqual(expenses)
})

test('should edit Expense',()=>{
    const state=expenseReducers(expenses,{
        type:'EDIT_EXPENSE',
        id:'123',
        updates:{
            amount:50
        }
    })
    expect(state[0].amount).toBe(50)
})

test('should add Expense with default value',()=>{
    const expense ={
        id:'4',
        description:'Bill',
        note:'new note',
        amount:6000,
        createdAt:0
    }
    const state=expenseReducers(expenses,{
        type:'ADD_EXPENSE',
        expense  
    })
    expect(state).toEqual([...expenses,expense])
})
