import React from "react";
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {startAddExpense} from "../actions/expenses";

export class AddExpensePage extends React.Component {

    onSubmit = (expense)=>{
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch)=>({
    addExpense: (expense)=> dispatch(startAddExpense(expense))
});
export default connect(undefined, mapDispatchToProps)(AddExpensePage);