import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';



export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?(props.expense.amount/100).toString():'',
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            calendarFocused:false,
            error:''
        }
        this.handleDescChange=this.handleDescChange.bind(this);
        this.handleNoteChange=this.handleNoteChange.bind(this);
        this.handleAmountChange=this.handleAmountChange.bind(this);
        this.onDateChange=this.onDateChange.bind(this);
        this.onFocusChange=this.onFocusChange.bind(this);
        this.formSubmit=this.formSubmit.bind(this);
    }
    handleDescChange(e){
        const description=e.target.value;
        this.setState(()=>({
            description
        }));
    }
    handleNoteChange(e){
        const note=e.target.value;
        this.setState(()=>({
            note
        }))
    }
    handleAmountChange(e){
        const amount=e.target.value;
        if(!amount||amount.match(/^\d+(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }
    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}))
        }
        
    }
    onFocusChange=(({focused})=>{
        this.setState(()=>({calendarFocused:focused}))
    }) 
    formSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.amount || !this.state.description){
            this.setState(()=>({
                error:'Please Provide amount and description before submitting'
            }))
        }
        else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }
    } 
    render(){
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type="text" value={this.state.description} placeholder="Description" autoFocus 
                    onChange={this.handleDescChange}/>
                    <input type="text" value={this.state.amount} placeholder="Amount" 
                    onChange={this.handleAmountChange}/>
                    <SingleDatePicker 
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange} 
                    numberOfMonths={1} 
                    isOutsideRange={()=>false}/>

                    <textarea placeholder="Add a note for your expense(optional)"
                    value={this.state.note} onChange={this.handleNoteChange}></textarea>
                    <button>Submit</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}