function TaskAddForm(props) {
  const addTaskChange = props.addTaskChange
  const addTask = props.addTask
  return (
    //Center a div
    <div>
      <label for="taskname">
        Task Name:
      </label>
      <br></br>
      <input
        name="taskName"
        type="text"
        placeholder="Enter your task name here"
        onChange={addTaskChange}>
      </input>
      <br></br>
      <label for="taskdescription">
        Task Description:
      </label>
      <br></br>
      <input
        name="taskDescription"
        type="text"
        placeholder="Enter your task description here"
        onChange={addTaskChange}>
      </input>
      <br></br>
      <button
        onClick={(e) => addTask(e)}
      >
        Submit task
      </button>
      <br />
    </div>
  );
}

export default TaskAddForm;