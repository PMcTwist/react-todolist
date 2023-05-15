import React, { Component } from 'react';

export default class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {item: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
        [evt.target.name]: this.target.value
    })
  };

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createItem(this.state);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor='item'>New To Do</label>
        <input 
            type="text" 
            placeholder='New To Do' 
            id='item'
            name='item'
            onChange={this.handleChange}
        />
        <button>Add Item</button>
      </form>
    )
  };
};
