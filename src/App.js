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

  changeisClickedState = () => {
    this.setState({
      isClicked: !this.state.isClicked,
      items: [...this.state.items, this.state.input],
      input: ''
    })
  }

  onChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  deleteItem = (index) => {
    let todoList = this.state.items
    todoList.splice(index, 1);
    this.setState({
      items: todoList
    })
  }

  render () {
    console.log(this.state.input);
    return (
      <div className="App">
        <input value={this.state.input} onChange={this.onChange} />
        <button onClick={this.changeisClickedState}>{this.state.isClicked === false ? "FALSE" : "TRUE"}</button>
        <ul>
          {this.state.items.map((item, index) => {
            return <ToDoItem key={index} deleteButton={this.deleteItem(index)} listValue={item} />
          })}
        </ul>
      </div>
    );
  }

}

export default App;
