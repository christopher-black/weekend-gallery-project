import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
    constructor() {
        super();
        this.state = {
            showDescription: false,
        };
    }

    handleDetailsClick = (event) => {
        console.log('clicked on details button', this.props);
        this.setState(
            {
                showDescription: !this.state.showDescription
            }
        );
    }

    handleLikeClick = (event) => { // must be bound to capture 'this' from the
        console.log('clicked on like button');
        this.props.addLike(this.props.itemInfo);
    }

    render() {

        let detailsToShow; // our jsx object
        if(this.state.showDescription) {
            detailsToShow = <p>{this.props.itemInfo.description}</p>
        } else {
            detailsToShow = <img src={this.props.itemInfo.path} alt={this.props.itemInfo.description} />;
        }

        return (
            
            <div className="GalleryItem">
                <div className="GalleryItem-details" onClick={this.handleDetailsClick} >
                   {detailsToShow}
                </div>

                <button className="GalleryItem-likeButton" onClick={this.handleLikeClick}><i className="far fa-thumbs-up"></i></button>
                <p>Likes: {this.props.itemInfo.likes}</p>
                
            </div>
            
        );
    }
}

export default GalleryItem;
