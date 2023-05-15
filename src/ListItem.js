import React, { Component } from 'react';

export default class ListItem extends Component {
  

    render() {
        return (
            <div>
                <button>Edit</button>
                <button>X</button>
                <li>{this.props.item}</li>
            </div>
        )
    }
};
