import axios from 'axios';
import React, {Component} from 'react';
import  Login  from './Users/login';
import  Register  from './Users/register';
import WodList from './Wod/WodList';
import NavBar from './NavBar/navbar';
import Graph from './Chart/bar';
import Home from './Home/Home';
import Hopper from './Hopper/Hopper';
import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
    state = {
            wod: [],
        }
    
    //Display a random workout
    componentDidMount() {
        this.getRandomWod();
    }

    //GET request for Wod
    async getRandomWod() {
        let response = await axios.get('http://127.0.0.1:8000/api/hopper/all')
        this.setState({
            wod: response.data
        });
    }

    createUser = (newUser) => {
        this.state.users.push(newUser);
        axios.post ('http://127.0.0.1:8000/api/auth/register/', newUser)
            .then(response => this.setState = ({
                newUser: response.data
            }));
        window.location.reload();
    }


    render() { 
        return (
            <div>
               
                <BrowserRouter>
                   <NavBar />
                    <Switch className={App}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Graph" component={Graph} />
                        <Route exact path='/Login' component={Login} />
                        <Route exact path='/Register' component={Register} />
                        <Route exact path='/WodList' component={WodList} />
                        <Route exact path='/Hopper' component={Hopper} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
 
export default App;