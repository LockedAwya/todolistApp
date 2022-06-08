import { TextField, Button } from '@mui/material';


function TaskEditable(props) {
  const editTaskChange = props.editTaskChange;
  const editFormTask = props.editFormTask;
  const cancelChanges = props.cancelChanges;
  const submitChanges = props.submitChanges;
  const index = props.index;

  return (
    <div>
      <br></br>
      <TextField
        label="Task Name"
        name="taskName"
        value={editFormTask.taskName}
        onChange={(e) => editTaskChange(e)}
        variant="standard"
      />
      <br />
      <TextField
        label="Task Description"
        name="taskDescription"
        value={editFormTask.taskDescription}
        onChange={(e) => editTaskChange(e)}
        variant="standard"
      />
      <br></br>
      <div style={{ 'padding-bottom': '2rem;' }}>
        <Button color="inherit" variant="outlined" size="small" onClick={(e) => submitChanges(e, index)}>
          Save changes
        </Button>
        <Button color="inherit" variant="outlined" size="small" onClick={cancelChanges}>
          Cancel
        </Button>
      </div>
      <br />
    </div>
  );
}

export default TaskEditable;