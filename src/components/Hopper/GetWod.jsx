import React, { Component } from 'react';

class GetWod extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
            return (
                <tr>
                    <td> 
                        {this.props.wod.name}
                    </td>
                    <td> 
                        {this.props.wod.description}
                    </td>
                </tr>
            );
    }
}
 
export default GetWod;