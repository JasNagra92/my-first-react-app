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
  }

  fillTaskArray() {
    const task = this.state.task;
    this.setState((prevState) => {
      return {
        tasks: this.state.tasks.concat(task),
        task: {
          text: '',
          id: uniqid(),
          taskNumber: prevState.task.taskNumber + 1,
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

  removeTask(task) {
    
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
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
