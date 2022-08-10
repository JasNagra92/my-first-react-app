import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;
    return (
      <ul>
        {tasks.map(function listIterator(task) {
          return (
            <li key={task.id}>
              {' '}
              Task Number {task.taskNumber} - {task.text}
              <button>Delete Task</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Overview;
