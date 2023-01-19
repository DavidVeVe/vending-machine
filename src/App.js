import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import VendingMachine from './components/VendingMachine'
import Coffee from './components/Coffee'
import Beer from './components/Beer'
import Snacks from './components/Snacks'

import './App.css';


function App() {
    return (
        <Router>
                <Switch>
                    <Route path='/coffees' component={Coffee}/>
                    <Route path='/beer' component={Beer}/>
                    <Route path='/Snacks' component={Snacks}/>
                    <Route path="/" component={VendingMachine} />
                </Switch>
        </Router>
    );
}

export default App;
