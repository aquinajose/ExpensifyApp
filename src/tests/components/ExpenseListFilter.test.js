import React from 'react';
import {shallow} from 'enzyme';
import {filters,altFilters} from '../fixtures/filters';
import {ExpenseListFilter} from '../../components/ExpenseListFilter';

let wrapper,setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate;


beforeEach(()=>{
    setTextFilter =jest.fn();
    sortByAmount =jest.fn();
    sortByDate=jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    wrapper = shallow(<ExpenseListFilter filters={filters} setTextFilter={setTextFilter}
     sortByAmount={sortByAmount} sortByDate={sortByDate} 
     setStartDate={setStartDate} setEndDate={setEndDate}/>)
})
test('should render ExpenseListFilter correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change',()=>{
    const value='Rent'
    wrapper.find('input').simulate('change',{
        target:{
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})
test('should handle sort By amount change',()=>{
    const value='amount'
    wrapper.find('select').simulate('change',{
        target:{
            value
        }
    });
    expect(sortByAmount).toHaveBeenLastCalledWith()
})