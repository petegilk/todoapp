import React, {Component} from 'react';
import './App.css';
import ToDoItem from './ToDoItem'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      input: '',
      items: []
    }
  }

  changeisClickedState = (event) => {
    this.setState({
      isClicked: !this.state.isClicked,
    })
    if (this.state.input !== '') {
      this.setState({
        items: [...this.state.items, this.state.input],
        input: ''
      })
    } else {
      alert('Cannot add empty to-do item');
    }
  }

  onChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  deleteItem = (index) => () => {
    let todoList = [...this.state.items]
    todoList.splice(index, 1);
    this.setState({
      items: todoList
    })
  }

  render () {
    console.log(this.state.items);
    return (
      <div className="App">
        <input value={this.state.input} onChange={this.onChange} />
        <button onClick={this.changeisClickedState}>{this.state.isClicked === false ? "FALSE" : "TRUE"}</button>
        <ul>
          {this.state.items.map((item, index) => {
            return <ToDoItem key={index} listValue={item} deleteButton={this.deleteItem(index)} />
          })}
        </ul>
      </div>
    );
  }

}

export default App;
