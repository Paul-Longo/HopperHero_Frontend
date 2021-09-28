import React, { Component } from 'react';

class GetWod extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
            return (
                <tr>
                    <td>Name: <br />   
                        {this.props.wod.name}
                    </td>
                    <td>Description: <br />  
                        {this.props.wod.description}
                    </td>
                </tr>
            );
    }
}
 
export default GetWod;