import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wod =[],
        }
    }


    //Display a random workout
    componentDidMount() {
        this.getRandomWod();
    }

    //GET request for Wod
    


    render() { 
        return (
            <h1>Hopper Hero</h1>
        );
    }
}
 
export default App;