import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom'

const ShellDashboard = React.lazy(() => import('./ShellDashboard'));

// Components belong to Paper module 
const PaperDashboard = React.lazy(() => import('./features/papers/Dashboard'));

// Components belong to Grocery module
const GroceryDashboard = React.lazy(() => import('./features/grocery/Dashboard'));

// Components belong to Lottery module
const LotteryDashboard = React.lazy(() => import('./features/lottery/Dashboard'));

const Shell = () => {
    return (
    <div className="container p-5">
        <div className="row justify-content-center">
            <div className="col-sm-5">
                <React.Suspense fallback={<span>Loading...</span>}>
                    <Router>
                        <ul className="nav justify-content-center">
                            <NavLink
                                to="/paper"
                                className="nav-link"
                             >
                             Paper       
                            </NavLink>
                            <NavLink
                                to="/grocery"
                                className="nav-link active"
                             >
                             Grocery       
                            </NavLink>
                            <NavLink
                                to="/lottery"
                                className="nav-link"
                             >
                             Lottery      
                            </NavLink>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={ShellDashboard} />
                            <Route exact path="/paper" component={PaperDashboard} />
                            <Route exact path="/grocery" component={GroceryDashboard} />
                            <Route exact path="/lottery" component={LotteryDashboard} />
                        </Switch>
                    </Router>
                </React.Suspense>
            </div>
        </div>
    </div>);
}

export default Shell;