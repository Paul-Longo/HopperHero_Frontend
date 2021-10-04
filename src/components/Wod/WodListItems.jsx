import axios from "axios";
import React from "react";

class WodListItems extends React.Component {
    constructor(props) {
        super(props);
        let likeStatus = false
        this.props.likes.forEach((like) => {
            if(this.props.wod.id === like.wod) {
                likeStatus = true
            }
        })
        this.state = {
            wod: [],
            user: this.props.user,
            liked: likeStatus,
            likes: this.props.likes
        }
        console.log(this.state.likes)
    }

    componentWillMount() {
        // this.getLikes();
        // this.state.likes.forEach((like) => {
        //     if(this.props.wod.id === like.wod) {
        //         this.setState({
        //             liked: true
        //         })
        //     }
        // })
    }

    async getLikes() {
        let response = await axios.get('http://127.0.0.1:8000/api/hopper/likes/user/' + this.state.user.id)
        this.setState({
           likes: response.data
        });
    }

    toggleLike = () => {

        if(this.state.liked === false){
            let like = {
                user: this.props.user.id,
                wod: this.props.wod.id
            }
            let response = axios.post('http://127.0.0.1:8000/api/hopper/likes/', like)
        }
        else{
            this.state.likes.forEach((like) => {
                if(this.props.wod.id === like.wod) {
                    let response = axios.delete('http://127.0.0.1:8000/api/hopper/likes/' + like.id)
                    console.log(like.id)
                }
            })
        }
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