import React, { Component } from "react";
import { Input, Form } from "semantic-ui-react";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: props.initialValue };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    const { searchTerm } = this.state;
    this.props.searchFunc(searchTerm);
    this.setState({ searchTerm: "" });
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Search Feeds</label>
          <Input
            placeholder="Try searching for something like game..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    );
  }
}
