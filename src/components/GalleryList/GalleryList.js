import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        // array
        const data = this.props.galleryItems.map((item) => {
            return <GalleryItem key={item.id} itemInfo={item} />
        });

        console.log('data in render', data);
        
        return data;
    }
}

export default GalleryList;
