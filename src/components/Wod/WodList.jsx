import axios from 'axios';
import React, { Component } from 'react';
import './WodList.css';
import WodListItems from './WodListItems';
import { Button } from 'react-bootstrap';

class WodList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            wod: [],
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
                <h1 className="header">Hero Wods</h1>
                <Button className='likes' to='src/components/Favorites/likespage.jsx' >Likes</Button>
                <table className='wod-list'>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    {this.state.wod.map((wod, index)=>
                    <WodListItems wod={wod} index={index} />
                        )}
                </table>
                
            </div>
        );
    }
}
 
export default WodList ;