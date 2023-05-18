import React, { Component } from 'react';
import ToDo from './ListItem'
import NewToDoForm from './NewToDoForm';
import './ToDoList.css';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
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
    };

    toggleCompletion(id) {
        const updateToDos = this.state.todos.map(todo => {
            if (todo.id === id){
                return {...todo, completed: !todo.completed};
            }
            return todo;
        })
        this.setState({ todos: updateToDos });
    };

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo 
                        key={todo.id} 
                        id={todo.id} 
                        item={todo.item}
                        completed={todo.completed}
                        remove={this.remove} 
                        update={this.update}
                        toggle={this.toggleCompletion}
                    />;
        });

        return(
            <div className='TodoList'>
                <h1>
                    React To Do List
                    <span>Stop Starting and Start Finishing</span>
                </h1>
                <ul>{todos}</ul>
                <NewToDoForm createItem={this.create} />
            </div>
        )
    };
};