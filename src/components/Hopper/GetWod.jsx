import React, { Component } from 'react';

class GetWod extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
            return (
                <tr>
                    <td>Name:   {this.props.wod.name}</td>
                    <td>Description:  {this.props.wod.description}</td>
                </tr>
            );
    }
}
 
export default GetWod;