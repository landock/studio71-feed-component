import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'

import NewsFeed from './models/NewsFeed'; 
import FeedCollection from './components/FeedCollection'; 

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.newsFeed = new NewsFeed();
  }
  render() {
    console.log(this.newsFeed.getData());
    return (
      <Container>
        <Header className="App-header">
          Studio71 Feedz Thang
        </Header>
        <FeedCollection newsFeed={this.newsFeed.getData()}/>
      </Container>
    );
  }
}

export default App;
