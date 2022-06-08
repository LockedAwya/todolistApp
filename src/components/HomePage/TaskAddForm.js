import { TextField, Button } from '@mui/material';

function TaskAddForm(props) {
  const addTaskChange = props.addTaskChange
  const addTask = props.addTask
  return (
    //Center a div
    <div>
      <br></br>
      <TextField
        label="Task Name"
        name="taskName"
        placeholder="Enter your task name here"
        onChange={addTaskChange}
        variant="standard"
      />
      <br></br>
      <TextField
        label="Task Description"
        name="taskDescription"
        placeholder="Enter your task description here"
        onChange={addTaskChange}
        variant="standard"
      />
      <br></br>
      <div style={{ 'padding-bottom': '2rem;' }}>
        <Button color="inherit" variant="outlined" size="medium" onClick={addTask}>
          Submit task
        </Button>
      </div>
      <br />
    </div>
  );
}

export default TaskAddForm;