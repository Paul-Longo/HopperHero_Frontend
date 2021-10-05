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
            user: this.props.user,
            likes: []
        }
        this.getLikes();
        this.getWod();
    }

    // componentWillMount() {
    //     this.getLikes();
    //     this.getWod();
    // }

    async getWod() {
        let response = await axios.get('http://127.0.0.1:8000/api/hopper/all')
        await this.setState({
            wod: response.data
        });
    }

    async getLikes() {
        let response = await axios.get('http://127.0.0.1:8000/api/hopper/likes/user/' + this.state.user.id)
        this.setState({
           likes: response.data
        });
        console.log(this.state.likes)
    }

    render() {
        return (
            <div>
                <h1 className="header">Hero Wods</h1>
                {/* <Button className='likes' to='/likes' >Likes</Button> */}
                <table className='wod-list'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.wod.map((wod, index)=>
                    <WodListItems key={index} wod={wod} user={this.state.user} likes={this.state.likes}/>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default WodList ;