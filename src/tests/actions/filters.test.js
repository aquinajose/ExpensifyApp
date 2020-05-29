import moment from 'moment';
import {sortByAmount, sortByDate, setTextFilter, setStartDate , setEndDate} from '../../actions/filters';

test('set up sort by amount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

test('set up sort by date action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('set up set text filter action object with no value',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('set up set text filter action object with  value',()=>{
    const action = setTextFilter('note');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'note'
    })
})
test('should generate set start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        date:moment(0)
    })
})

test('should generate set end date action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        date:moment(0)
    })
})