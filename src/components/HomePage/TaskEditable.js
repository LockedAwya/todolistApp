import { useEffect } from 'react';

function TaskEditable(props) {
  const editTaskChange = props.editTaskChange;
  const editFormTask = props.editFormTask;
  const cancelChanges = props.cancelChanges;
  const submitChanges = props.submitChanges;
  const index = props.index;

  useEffect(() => {
    console.log("random lol");
    console.log("Task is what: " + JSON.stringify(editFormTask))
  }, [])

  return (
    <div className="border border-primary" md={{ span: 1, offset: 1 }}>
      <label for="taskName">Task name:</label>
      <input
        type="text"
        name="taskName"
        value={editFormTask.taskName}
        onChange={(e) => editTaskChange(e)}
      ></input>
      <label for="taskDescription">Task description:</label>
      <input
        type="text"
        name="taskDescription"
        value={editFormTask.taskDescription}
        onChange={(e) => editTaskChange(e)}
      ></input>
      <button onClick={(e) => submitChanges(e, index)}>Save changes</button>
      <button onClick={cancelChanges}>Cancel</button>
    </div>
  );
}

export default TaskEditable;