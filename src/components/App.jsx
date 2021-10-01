import React, {Component} from 'react';
import  Login  from './Users/login';
import  Register  from './Users/register';
import WodList from './Wod/WodList';
import NavBar from './NavBar/navbar';
import Chart from './Chart/bar';
import Home from './Home/Home';
import Hopper from './Hopper/Hopper';
import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WodDiary from './WodDiary/woddiary';
import jwt_decode from 'jwt-decode';
import axios from 'axios';


class App extends Component {
    state = {
            wod: [],
            user: [],
            user_id: ''
        }

    componentWillMount(){
        this.getUserToken();
    }

    async getUserToken() {
        let jwt = localStorage.getItem('token');

        try{
            const user = jwt_decode(jwt); 
            console.log(user.user_id)
            await this.setState({user_id: user.user_id})
            console.log(this.state.user_id)
            let request = await axios.get('http://127.0.0.1:8000/api/auth/user/' + this.state.user_id) 
            this.setState({user: request.data})
            console.log(request.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    render() { 
        return (
            <div>
               
                <BrowserRouter>
                   <NavBar />
                    <Switch className={App}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Chart" component={Chart} />
                        <Route exact path='/Login' render={props => <Login {...props} user={this.state.user}/>}/>
                        <Route exact path='/Register' component={Register} />
                        <Route exact path='/WodList' render={props => <WodList {...props} user={this.state.user}/>}/>
                        <Route exact path='/Hopper' component={Hopper} />
                        <Route exact path='/WodDiary' component={WodDiary} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
 
export default App;