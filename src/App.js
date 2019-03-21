import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'

import NewsFeed from './models/NewsFeed'; 
import FeedCardCollection from './components/FeedCardCollection'; 

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.newsFeed = new NewsFeed();
  }
  render() {
    console.log(this.newsFeed.getData());
    return (
      <Container centered fluid className="App">
        <Header className="App-header">
          Studio71 Feedz Thang
        </Header>
        <FeedCardCollection newsFeed={this.newsFeed.getData()}/>
      </Container>
    );
  }
}

export default App;
