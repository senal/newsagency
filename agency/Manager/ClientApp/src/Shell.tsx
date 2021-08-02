import { features } from 'process';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom'

const ShellDashboard = React.lazy(() => import('./ShellDashboard'));

// Components belong to Paper module 
const PaperIndex = React.lazy(() => import('./features/papers/Index'));

// Components belong to Grocery module
const GroceryIndex = React.lazy(() => import('./features/grocery/Index'));

// Components belong to Lottery module
const LotteryIndex = React.lazy(() => import('./features/lottery/Index'));

const Shell = () => {
    return (
    <div className="container p-5">
        <div className="row justify-content-sm-center">
            <div className="col-sm-5">
                <React.Suspense fallback={<span>Loading...</span>}>
                    <Router>
                        <ol className="breadcrumb">
                            <NavLink
                                to="/paper"
                                className="breadcrumb-item"
                                activeClassName="active"
                             >
                             Paper       
                            </NavLink>
                            <NavLink
                                to="/grocery"
                                className="breadcrumb-item"
                                activeClassName="active"
                             >
                             Grocery       
                            </NavLink>
                            <NavLink
                                to="/lottery"
                                className="breadcrumb-item"
                                activeClassName="active"
                             >
                             Lottery      
                            </NavLink>
                        </ol>
                        <Switch>
                            <Route exact path="/" component={ShellDashboard} />
                            <Route exact path="/paper" component={PaperIndex} />
                            <Route exact path="/grocery" component={GroceryIndex} />
                            <Route exact path="/lottery" component={LotteryIndex} />
                        </Switch>
                    </Router>
                </React.Suspense>
            </div>
        </div>
    </div>);
}

export default Shell;