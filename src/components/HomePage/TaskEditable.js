function TaskEditable(props) {
  const editTaskChange = props.editTaskChange;
  const editFormTask = props.editFormTask;
  const cancelChanges = props.cancelChanges;
  const submitChanges = props.submitChanges;
  const index = props.index;
  return (
    <div style={{ "float": "left" }}>
      <label for="taskName">Task name:</label>
      <input
        type="text"
        name="taskName"
        value={editFormTask.taskName}
        onChange={editTaskChange}
      ></input>
      <label for="taskDescription">Task description:</label>
      <input
        type="text"
        name="taskDescription"
        value={editFormTask.taskDescription}
        onChange={editTaskChange}
      ></input>
      <button onClick={(e) => submitChanges(e, index)}>Save changes</button>
      <button onClick={cancelChanges}>Cancel</button>
    </div>
  );
}

export default TaskEditable;