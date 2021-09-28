import React, {Component} from 'react';
import  Login  from './Users/login';
import  Register  from './Users/register';
import WodList from './Wod/WodList';
import NavBar from './NavBar/navbar';
import Chart from './Chart/bar';
import Home from './Home/Home';
import Hopper from './Hopper/Hopper';
import Profile from './Profile/Profile';
import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
    state = {
            wod: [],
        }


    render() { 
        return (
            <div>
               
                <BrowserRouter>
                   <NavBar />
                    <Switch className={App}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Chart" component={Chart} />
                        <Route exact path='/Login' component={Login}/>
                        <Route exact path='/Register' component={Register} />
                        <Route exact path='/WodList' component={WodList} />
                        <Route exact path='/Hopper' component={Hopper} />
                        <Route exact path='/Profile' component={Profile} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
 
export default App;