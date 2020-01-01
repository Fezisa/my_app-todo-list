//import React from 'react';
import React, {Component} from 'react' ;
import TodoInput from './components/TodoInput' ;
import TodoList from './components/TodoList' ;

//import 'bootstrap/dist/css/bootstrap.min.css' ;
//import uuid from 'uuid' ; 


class App extends Component {
  
  render() {
    return (
    <div> 
    hello from the main app
    <TodoInput />
    <TodoList />
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