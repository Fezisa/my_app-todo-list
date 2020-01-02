//import React from 'react';
import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';


class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item

    } ;

console.log(newItem) ;

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    });
  };

clearList = () =>{
  this.setState(
    {items:[]}
  )
}

handleDelete = id => {
  const filteredItems = this.state.items.filter(item=>
    item.id !== id)
    this.setState({
      items: filteredItems
    })
}

handleEdit = id => {
  const filteredItems = this.state.items.filter(item=>
    item.id !== id)

const selectedItem = this.state.items.find(item => item.id === id)

console.log(selectedItem);

this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
}


  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-18 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">My To Do List</h3>
            <h6 className="text-capitalize text-center">By Fez</h6>

            <TodoInput item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}  />

            <TodoList items={this.state.items} 
            clearList={this.clearList} 
            handleDelete={this.handleDelete}
              handleEdit={this.handleEdit} />

            {/* <TodoItem /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;




      //import React from 'react';
      //import './App.css';

/* function App() {
  return (
    <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
        </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
        </a>
            </header>
          </div>
          );
        } */

// export default App;