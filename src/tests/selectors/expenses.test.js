import moment from 'moment';
import selectExpense from '../../selectors/expenses';
import expenses from '../fixtures/expenses';




test('expense select with text filter data',()=>{
    const filters={
     text: 'e',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const result = selectExpense(expenses,filters);
expect(result).toEqual([expenses[1],expenses[2]])
})
test('expense select with default state',()=>{
    const filters={
     text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const result = selectExpense(expenses,filters);
expect(result).toEqual([expenses[1],expenses[0],expenses[2]])
})
test('expense select with start date',()=>{
    const filters={
     text: '',
  sortBy: 'date',
  startDate: moment(0),
  endDate: undefined
}
const result = selectExpense(expenses,filters);
expect(result).toEqual([expenses[2],expenses[0]])
})

test('expense select with text end date',()=>{
    const filters={
     text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: moment(0)
}
const result = selectExpense(expenses,filters);
expect(result).toEqual([expenses[0],expenses[2]])
})
test('expense select with text filter data',()=>{
    const filters={
     text: 'e',
sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const result = selectExpense(expenses,filters);
expect(result).toEqual([expenses[1],expenses[2]])
})
test('expense select with sort by amount ',()=>{
    const filters={
     text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
}
const result = selectExpense(expenses,filters);
expect(result).toEqual([expenses[2],expenses[1],expenses[0]])
})

test('expense select with sort by date',()=>{
    const filters={
     text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const result = selectExpense(expenses,filters);
expect(result).toEqual([expenses[1],expenses[0],expenses[2]])
})