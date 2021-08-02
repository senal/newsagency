import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
    useRouteMatch
} from 'react-router-dom'

const Dashboard = () => {
    
    const match = useRouteMatch(); 

    // inventory 
    const inventoryComponent = React.lazy(() => import('./inventorry/Index'));

    // delivery
    const deliveryComponent = React.lazy(() => import('./delivery/Index'));

    // advertisments
    const advertisementsComponent = React.lazy(() => import('./advertisements/Index'));

    // returns
    const returnsComponent = React.lazy(() => import('./returns/Index'));



    return (
        <div>
            <React.Suspense fallback={<span>Loading...</span>}>
                <Router>
                    <ul>
                        <NavLink to={`${match.url}/`} 
                        className="nav-link"
                        activeClassName="active">Inventory</NavLink>
                        <NavLink to={`${match.url}/delivery`} 
                        className="nav-link"
                        activeClassName="active">Delivery</NavLink>
                        <NavLink to={`${match.url}/returns`} 
                        className="nav-link"
                        activeClassName="active">Returns</NavLink>
                        <NavLink to={`${match.url}/advertisements`} 
                        className="nav-link"
                        activeClassName="active">Advertisement</NavLink>
                    </ul>
                    <Switch>
                            <Route exact path={`${match.url}/`} component={inventoryComponent} />
                            <Route exact path={`${match.url}/delivery`} component={deliveryComponent} />
                            <Route exact path={`${match.url}/advertisements`} component={advertisementsComponent} />
                            <Route exact path={`${match.url}/returns`} component={returnsComponent} />
                        </Switch>
                </Router>
            </React.Suspense>
        </div>
    );
}

export default Dashboard;