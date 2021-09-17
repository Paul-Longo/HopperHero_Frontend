import axios from 'axios';
import React, { Component } from 'react';


class WodList extends Component {
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
                <h1>Hero Wods</h1>
                <table className='wod-list'>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    {this.state.wod.map((wod, index)=>
                        <tr key={index}>
                            <td className='wod-list__name'>{wod.name}</td>
                            <td className='wod-list__description'>{wod.description}</td>
                        </tr>)}
                </table>
            </div>
        );
    }
}
 
export default WodList ;
