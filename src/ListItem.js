import React, { Component } from 'react';

export default class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            item: this.props.item
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
  
    handleRemove() {
        this.props.remove(this.props.id);
    };

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    };

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.update(this.props.id, this.state.item);
        this.setState({ isEditing: !this.state.isEditing });
    };

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
      };

    render() {
        let results;

        if (this.state.isEditing) {
            results = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input 
                            type='text' 
                            value={this.state.item} 
                            name='item' 
                            onChange={this.handleChange} 
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            results = (
                <div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li>{this.props.item}</li>
                </div>
            );
        }
        
        return results;
    }
};
