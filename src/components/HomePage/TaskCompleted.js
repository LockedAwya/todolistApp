import { ListItem, ListItemText } from '../../../node_modules/@mui/material/index';
import { AutoDeleteRounded } from '@mui/icons-material';
import { Tooltip } from '../../../node_modules/@mui/material/index';

function TaskCompleted(props) {
  const task = props.task;
  const deleteTask = props.deleteTask;
  const index = props.index
  return (
    <div style={{ 'background-color': 'green' }}>
      < ListItem >
        <ListItemText
          primary={task.taskName}
          secondary={task.taskDescription}
        />
        <br />
        <Tooltip title="Delete the task">
          <AutoDeleteRounded onClick={deleteTask}></AutoDeleteRounded>
        </Tooltip>
      </ListItem>
    </div >
  );
}

export default TaskCompleted;