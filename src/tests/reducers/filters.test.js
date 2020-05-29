const moment =require.requireActual('moment')
import filterReducer from '../../reducers/filters';


const filters = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};
test('filter reducer for setting text filter',()=>{
    const result = filterReducer(filters,{
        type:'SET_TEXT_FILTER',
        text:'note'
    });
    expect(result).toEqual({...filters,text:'note'})
})
test('filter reducer for sort by amount',()=>{
    const result = filterReducer(filters,{
        type:'SORT_BY_AMOUNT'
    });
    expect(result).toEqual({...filters,sortBy:'amount'})
})
test('filter reducer for setting text filter',()=>{
    const result = filterReducer(filters,{
        type:'SORT_BY_DATE'
    });
    expect(result).toEqual({...filters,sortBy:'date'})
})
test('filter reducer for setting by start date',()=>{
    const result = filterReducer(filters,{
        type:'SET_START_DATE',
        date:moment(0)
    });
    expect(result).toEqual({...filters,startDate:moment(0)})
})
test('filter reducer for setting by end date',()=>{
    const result = filterReducer(filters,{
        type:'SET_END_DATE',
        date:moment(0)
    });
    expect(result).toEqual({...filters,endDate:moment(0)})
})
