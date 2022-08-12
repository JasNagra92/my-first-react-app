import Overview from './components/Overview';
import React from 'react';
import uniqid from 'uniqid';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      task: { text: '', id: uniqid(), taskNumber: 1 },
    };

    this.fillTaskArray = this.fillTaskArray.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setUpdate = this.setUpdate.bind(this)
  }

  fillTaskArray() {
    const task = this.state.task;
    this.setState((prevState) => {
      return {
        tasks: this.state.tasks.concat(task),
        task: {
          text: '',
          id: uniqid(),
          taskNumber: this.state.tasks.length + 1 ,
        },
      };
    });
  }

  updateInputValue(evt) {
    const val = evt.target.value;
    this.setState({
      task: {
        text: val,
        id: this.state.task.id,
        taskNumber: this.state.task.taskNumber,
      },
    });
  }

  setUpdate (text, id) {
    this.setState({
      tasks: this.state.tasks.map(task=>{
        if (task.id === id){
          task.text = text
        } return task
      })
    })
  }

  handleDelete(id) {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div className="App">
        <input
          type="test"
          onChange={(evt) => this.updateInputValue(evt)}
          value={task.text}
          id="taskInput"
        />
        <button onClick={this.fillTaskArray}>Submit</button>
        <Overview 
        tasks={tasks} 
        handleDeleteProps={this.handleDelete}
        handleUpdateProps={this.setUpdate} />
      </div>
    );
  }
}

export default App;
