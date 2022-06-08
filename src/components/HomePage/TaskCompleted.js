import Col from 'react-bootstrap/Col';

function TaskCompleted(props) {
  const task = props.task;
  const deleteTask = props.deleteTask;
  const index = props.index

  return (
    <div>
      <Col className="border border-primary" md={{ span: -3, offset: 3 }}>
        <h1>{task.taskName}</h1>
        <p>
          {task.taskDescription}
        </p>
        <br />
        <button onClick={(e) => deleteTask(e, index)}>Delete Task</button>
        <br />
        {/* <div id="example-collapse-text">
          fasdfasdf
        </div> */}
      </Col>
    </div>
  );
}

export default TaskCompleted;