import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListItemFilter from './ExpenseListItemFilter';
const ExpenseDashboardPage = ()=>(
    <div>
        <ExpenseListItemFilter/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;