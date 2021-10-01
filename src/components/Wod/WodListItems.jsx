import React from "react";


class WodListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wod: [],
            liked: false,
        }
    }

    toggleLike = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {
        const changeColor = this.state.liked ? "red" : "grey"

        return (                   
            <tr key={this.props.index}>
                <td className='wod-list__name'>{this.props.wod.name}</td>
                <td className='wod-list__description'>{this.props.wod.description}</td>
                <td><button className="likebtn" onClick={this.toggleLike}>
                    <i className="fas fa-heart fa-lg" style={{ color: changeColor }}></i>
                </button></td>
            </tr>
        )
    }
}
 
export default WodListItems;