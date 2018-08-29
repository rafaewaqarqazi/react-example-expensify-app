import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListItemFilter from './ExpenseListItemFilter';
import ExpensesSummary from './ExpenseSummary';

const ExpenseDashboardPage = ()=>(
    <div>
        <ExpensesSummary/>
        <ExpenseListItemFilter/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;