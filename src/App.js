import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

import NewsFeed from './models/NewsFeed'; 

import './App.css';

const CardExampleCard = () => (
  <Card>
    <Image src='https://placeimg.com/100/100/any' />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.newsFeed = new NewsFeed();
  }
  render() {
    console.log(this.newsFeed.getData());
    return (
      <div className="App">
        <header className="App-header">
          Hello
        </header>
        <CardExampleCard />
      </div>
    );
  }
}

export default App;
