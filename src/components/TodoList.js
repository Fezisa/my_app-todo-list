import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

    render() {
        return (

            <div>

            <ul className="list-group my-5"> 
            <h3 className="text-capitalize text center">todo list</h3> 
            
            </ul>


            {/* <h1>Hello From ToDoList App</h1>
            <TodoItem /> */}

        </div>
    );
}
}

