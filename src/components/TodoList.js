import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

    render() {
        return (

            <div>

            <ul className="list-group my-5"> 
            <TodoItem />
            
            <h3 className="text-capitalize text center"></h3> 
            
            <button type="button" className="btn btn-danger btn-block text-capitalize mt-5">
                clear list</button>
            </ul>

            

        </div>
    );
}
}

