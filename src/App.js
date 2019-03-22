import React, { Component } from "react";
import { Container, Header, Button } from "semantic-ui-react";

import NewsFeed from "./models/NewsFeed";
import FeedCollection from "./components/FeedCollection";
import SearchForm from "./components/SearchForm";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.newsFeed = new NewsFeed();
    this.state = {
      allFeeds: this.newsFeed.getData(),
      searchFeeds: null
    };
    this.searchFeeds = this.searchFeeds.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ searchFeeds: null });
  }
  searchFeeds(searchTerm) {
    let searchFeeds = this.newsFeed.search(searchTerm);
    this.setState({ searchFeeds });
  }
  render() {
    console.log(this.state.allFeeds);
    return (
      <Container className="feed-component">
        <Header className="App-header">Studio71 Feeds Thang</Header>
        <SearchForm
          initialValue={this.state.initialValue}
          searchFunc={this.searchFeeds}
        />
        {this.state.searchFeeds && (
          <Button
            className="btn-back"
            icon="arrow left"
            content=" Show All"
            onClick={this.handleClick}
          />
        )}
        <FeedCollection
          newsFeed={this.state.searchFeeds || this.state.allFeeds}
        />
      </Container>
    );
  }
}

export default App;
