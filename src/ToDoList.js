import React, { Component } from 'react';
import ToDo from './ListItem'
import NewToDoForm from './NewToDoForm';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    };

    create(newItem) {
        this.setState({
            todos: [...this.state.todos, newItem]
        });
    };

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        })
    };

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo key={todo.id} id={todo.id} item={todo.item} remove={this.remove} />;
        });

        return(
            <div>
                <h1>To Do List</h1>
                <NewToDoForm createItem={this.create} />
                <ul>{todos}</ul>
            </div>
        )
    };
};