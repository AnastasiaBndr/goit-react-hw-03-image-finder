import React, { Component } from 'react';
import Loader from './Loader';
import Modal from './Modal';
import ImageGalleryItem from './ImageGalleryItem';
import Searchbar from './Searchbar';
import './styles.css';


export class App extends Component {

  state = {
    showModal: true,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !this.state.showModal }));
    console.log(this.state.showModal)
  }

  render() {
    return (<div>

      <Searchbar />



    </div>);
  }
};

