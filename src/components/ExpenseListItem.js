import React from 'react';
import {Link} from 'react-router-dom';


const ExpenseListItem= ({description,createdAt,id,amount,dispatch}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <p>{description}</p>
        </Link>
        <p>Amount : {amount} created at :{createdAt}</p>
        
    </div>
)

export default ExpenseListItem;