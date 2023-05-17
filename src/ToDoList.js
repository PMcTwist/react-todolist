import React, { Component } from 'react';
import ToDo from './ListItem'
import NewToDoForm from './NewToDoForm';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
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

    update(id, updatedItem) {
        const updateToDos = this.state.todos.map(todo => {
            if (todo.id === id){
                return {...todo, item: updatedItem};
            }
            return todo;
        })
        this.setState({ todos: updateToDos });
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo 
                        key={todo.id} 
                        id={todo.id} 
                        item={todo.item} 
                        remove={this.remove} 
                        update={this.update}
                    />;
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