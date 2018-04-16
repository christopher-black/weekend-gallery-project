import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


class App extends Component {
  constructor() {
    super();

    this.state = {
      galleryItems: [
        { id: 1, path: 'images/luca-breakfast.jpg', description: 'My son Luca is hilarious at breakfast!', likes: 10 },
        { id: 2, path: 'images/gretzky.jpg', description: 'The Great One!', likes: 3 },
      ]
    }

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header> 

        <div className="Gallery">
          <GalleryList galleryItems={this.state.galleryItems} />
        </div>
      </div>
    );
  }
}

export default App;
