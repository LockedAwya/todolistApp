
function TaskCompleted(props) {
  const tasks = props.tasks;
  const deleteTask = props.deleteTask;
  const index = props.index

  return (
    <div style={{ "float": "left" }}>
      <h1>{tasks[index].taskName}</h1>
      <p>
        {tasks[index].taskDescription}
      </p>
      <br />
      <button onClick={(e) => deleteTask(e, index)}>Delete Task</button>
      <br />
    </div>
  );
}

export default TaskCompleted;