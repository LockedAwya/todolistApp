import { useEffect } from 'react';
import { ListItem, ListItemText, Tooltip } from '../../../node_modules/@mui/material/index';
import { AutoDeleteRounded, Edit, FactCheck } from '@mui/icons-material';


function TaskReadOnly(props) {
  //const tasks = props.tasks;
  const task = props.task;
  const deleteTask = props.deleteTask;
  const editTask = props.editTask;
  const markTaskDone = props.markTaskDone
  //const index = props.index

  useEffect(() => {
    console.log("random lol");
    console.log("Task is : " + JSON.stringify(task))
  }, [])

  const style = {
    border: '5px solid red;',
  }

  return (
    <div style={{ 'background-color': 'yellow' }}>
      < ListItem >
        <ListItemText
          primary={task.taskName}
          secondary={task.taskDescription}
        />
        <br />
        <Tooltip title="Move to completed Task">
          <FactCheck onClick={markTaskDone}>
          </FactCheck>
        </Tooltip>
        <Tooltip title="Edit task content">
          <Edit onClick={editTask}>
          </Edit>
        </Tooltip>
        <Tooltip title="Delete Task">
          <AutoDeleteRounded onClick={deleteTask}></AutoDeleteRounded>
        </Tooltip>
      </ListItem>
    </div>
  );
}

export default TaskReadOnly;