import React from 'react';
import TodoItem from './TodoItem';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, handleDeleteProps, handleUpdateProps } = this.props;
    return (
      <ul>
        {tasks.map((task) => {
          return <TodoItem key={task.id} task={task} handleDeleteProps={handleDeleteProps} handleUpdateProps={handleUpdateProps} />
        })}
      </ul>
    );
  }
}

export default Overview;
