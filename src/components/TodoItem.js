import React, { useState } from "react";

const TodoItem = (props) => {
  const [editable, setEdit] = useState(false);
  const { task } = props;

  let viewMode = {};
  let editMode = {};

  if (editable) {
    editMode.display = "block";
    viewMode.display = "none"
  } else {
    editMode.display = "none";
  }

  return (
    <div>
        <li style={viewMode}>
          {task.taskNumber} - {task.text}
          <button onClick={() => props.handleDeleteProps(task.id)}>Delete</button>
          <button onClick={() => setEdit(!editable)}>Edit</button>
        </li>
        <div style={editMode}>
            <input
            type="text"
            value={task.text}
            onChange={(e) => props.handleUpdateProps(e.target.value, task.id)}
            />
            <button
            onClick={()=>setEdit(false)}
            >submit</button>
        </div>
    </div>
  );
};
export default TodoItem;
