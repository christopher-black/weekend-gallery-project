import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
    render() {
        return (
            
            <div className="GalleryItem">
                <img 
                    src={this.props.itemInfo.path} 
                    alt={this.props.itemInfo.description} />
                <button className="GalleryItem-likeButton"><i className="far fa-thumbs-up"></i></button>
            </div>
            
        );
    }
}

export default GalleryItem;
