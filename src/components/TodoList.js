import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

    render() {
        return (
        <div>
            <h1>Hello From ToDoList</h1>
            <TodoItem />
        </div>
    );
}
}

