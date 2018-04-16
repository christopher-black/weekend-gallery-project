import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


class App extends Component {
  constructor() {
    super();

    this.state = {
      galleryItems: []
    }

  }

  componentDidMount() {
    this.getGalleryData();
  }

  getGalleryData() {  // only called from this class
    axios.get('/gallery')
      .then((response) => {
        console.log('get response', response.data);
        this.setState({
          galleryItems: response.data
        });
      })
      .catch((error) => {
        console.log('get error', error);        
      });
  }

  addLike = (item) => { // called from other classes, 'this' must be bound
    console.log('updating likes for: ', item.id);
    
    axios.put(`/gallery/like/${item.id}`)
    // axios.put('/gallery/like/' + item.id)
      .then((response) => {
        console.log('put like response', response.data);
        this.getGalleryData();
      })
      .catch((error) => {
        console.log('put like error', error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header> 

        <div className="Gallery">
          <GalleryList galleryItems={this.state.galleryItems} addLike={this.addLike} />
        </div>
      </div>
    );
  }
}

export default App;
