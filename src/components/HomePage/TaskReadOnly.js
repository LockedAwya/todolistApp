import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';

function TaskReadOnly(props) {
  //const tasks = props.tasks;
  const task = props.task;
  const deleteTask = props.deleteTask;
  const editTask = props.editTask;
  const isDone = props.isDone;
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
    <>
      <div>
        <Col className="border border-primary" md={{ span: 1, offset: 1 }}>
          <h1>{task.taskName}</h1>
          <p>
            {task.taskDescription}
          </p>
          {/* Done: <input
            type="checkbox"
            name="check"
            onChange={(e) => isDone(e, task)} defaultChecked={task.taskCompleted}></input> */}
          <button onClick={markTaskDone}>Mark as done</button>
          <br></br>
          {/* <button onClick={(e) => completedTask(e, index)}>Move to Completed Tasks</button>
      <br></br> */}
          <button onClick={deleteTask}>Delete Tasks</button>
          <br></br>
          <button onClick={editTask}>Edit Task</button>
          <br></br>
          <br />
        </Col>
      </div>
    </>
  );
}

export default TaskReadOnly;