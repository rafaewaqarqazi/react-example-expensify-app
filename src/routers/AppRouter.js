import {BrowserRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import React from "react";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotfoundPage from '../components/NotfoundPage';
import Header from '../components/Header'

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage}/>
                <Route component={NotfoundPage}/>
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;