import React, { Component } from 'react';
import ToDo from './ListItem'
import NewToDoForm from './NewToDoForm';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: [{item: "Make resume"}, {item: "Find new Job"}, {item: "Quit this job"}]};
        this.create = this.create.bind(this);
    };

    create(newItem) {
        this.setState({
            todos: [...this.state.todos, newItem]
        });
    };

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo item={todo.item} />;
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