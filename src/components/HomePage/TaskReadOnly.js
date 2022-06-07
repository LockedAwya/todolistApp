
function TaskReadOnly(props) {
  const tasks = props.tasks;
  const deleteTask = props.deleteTask;
  const editTask = props.editTask;
  const isDone = props.isDone;
  const index = props.index
  const completedTask = props.completedTask

  return (
    <div style={{ "float": "left" }}>
      <h1>{tasks[index].taskName}</h1>
      <p>
        {tasks[index].taskDescription}
      </p>
      <br />
      Done: <input
        type="checkbox"
        name="check"
        onChange={(e) => isDone(e, index)} defaultChecked={tasks[index].taskCompleted}></input>
      <br></br>
      <button onClick={(e) => completedTask(e, index)}>Move to Completed Tasks</button>
      <br></br>
      <button onClick={(e) => deleteTask(e, index)}>Delete Task</button>
      <br></br>
      <button onClick={(e) => editTask(e, index)}>Edit Task</button>
      <br></br>
      <br />
    </div>
  );
}

export default TaskReadOnly;