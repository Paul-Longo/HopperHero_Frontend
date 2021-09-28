import React, { Component } from 'react';
import axios from 'axios';
import "./Hopper.css";
import GetWod from "./GetWod";
import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

let wod = []

class Hopper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rwods: [],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        this.GetWod();
    }    

    async GetWod() {
        let response = await axios.get('http://127.0.0.1:8000/api/hopper/all/')
        wod = response.data
        console.log(response.data)
    }


    handleClick = () =>{
        let arr = []
        for (let i = 0; i < 3; i++){
            arr.push(Math.floor(Math.random() * 50))
        }
        let w1 = wod[arr[0]]
        let w2 = wod[arr[1]]
        let w3 = wod[arr[2]]
        console.log(arr)
        this.setState({
            rwods: [w1, w2, w3]
        })
        this.forceUpdate();
    }

    render() {
        if(this.state.rwods.length > 0) {
            let wodlist = this.state.rwods
            return (
                <div>
                    <h1 className="header">Random Wods</h1>
                    <Table className='hopper'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>  
                        </tr>
                        </thead>
                        <tbody>
                        {wodlist.map((wod, i)=> (
                            <GetWod key={i} wod={wod}/>
                        ))}
                        </tbody>
                    </Table>
                    <center><Button className="btn" onClick={() => this.handleClick()}>LETS GO!</Button></center>
                </div>
            )
        }
        else{
            return(<div><center><Button className="btn" onClick={() => this.handleClick()}>LETS GO!</Button></center></div>)
           
        }
    }
}

export default Hopper;