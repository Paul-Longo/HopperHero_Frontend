import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (     
            <div className="home">
                <center>
                    <h1>Welcome to Hopper Hero</h1> <br />
                    <img className="image" src="./images/OIP.png" alt="" /> <br />
                    <h3>Select a Link from the Nav Bar</h3>
                </center>
            </div> 
        );
    }
}
 
export default Home;
