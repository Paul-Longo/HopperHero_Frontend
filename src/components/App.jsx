import axios from 'axios';
import React, {Component} from 'react';
import { Login } from './Users/login';
import { Register } from './Users/register';
import WodList from './Wod/WodList';
import NavBar from './NavBar/navbar';

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


    render() { 
        return (
            
            <div>
                <NavBar /> <br />
                <Login /> <br />
                <Register />
                <WodList wod={this.state.wod} />
            </div>
            
        );
    }
}
 
export default App;