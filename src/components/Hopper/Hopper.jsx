import React, { Component } from 'react';
import axios from 'axios';
import "./Hopper.css"

class Hopper extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            wod: []
        }
    }

    componentDidMount() {
        this.getWod();
    }

    async getWod() {
        let response = await axios.get('http://127.0.0.1:8000/api/hopper/all')
        this.setState({
            wod: response.data
        });
    }
    
    render() {
        return (
            <div>
                <h1 className="header">Random Wods</h1>
                <table className='hopper'>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    {this.state.wod.map((wod, index)=>
                        <tr key={index}>
                            <td className='hopper__name'>{wod.name}</td>
                            <td className='hopper__description'>{wod.description}</td>
                        </tr>)}
                </table>
                <button className="btn" onClick={this.state.wod}>LETS GO!</button>
            </div>
        )
    }
}

export default Hopper;