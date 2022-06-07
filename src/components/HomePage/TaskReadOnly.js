import { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from '../../redux/taskList'

function TaskReadOnly(props) {
  //const tasks = props.tasks;
  const task = props.task;
  const deleteTask = props.deleteTask;
  const editTask = props.editTask;
  const isDone = props.isDone;
  //const index = props.index

  useEffect(() => {
    console.log("random lol");
    console.log("Task is : " + JSON.stringify(task))
  }, [])

  return (
    <div style={{ "float": "left" }}>
      <h1>{task.taskName}</h1>
      <p>
        {task.taskDescription}
      </p>
      <br />
      Done: <input
        type="checkbox"
        name="check"
        onChange={(e) => isDone(e, task)} defaultChecked={task.taskCompleted}></input>
      <br></br>
      {/* <button onClick={(e) => completedTask(e, index)}>Move to Completed Tasks</button>
      <br></br> */}
      <button onClick={deleteTask}>Delete Tasks</button>
      <br></br>
      <button onClick={editTask}>Edit Task</button>
      <br></br>
      <br />
    </div>
  );
}

export default TaskReadOnly;