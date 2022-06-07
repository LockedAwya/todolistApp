import TaskReadOnly from '../components/HomePage/TaskReadOnly'
import TaskEditable from '../components/HomePage/TaskEditable'
import TaskAddForm from '../components/HomePage/TaskAddForm'
import { useState, Fragment, useEffect } from 'react';
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addTaskToList, removeTaskFromList } from '../redux/taskList'

function HomePage() {
  const tasks = useSelector((state) => state.taskList.items)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("random");
  }, [])

  // const [tasks, setTasks] = useState([]);
  let [addFormTask, setAddFormTask] = useState({
    taskName: '',
    taskDescription: '',
    taskCompleted: false,
  });
  const [editFormTask, setEditFormTask] = useState({
    taskName: addFormTask.taskName,
    taskDescription: addFormTask.taskDescription,
    taskCompleted: addFormTask.taskCompleted,
  });
  const [isEditID, setIsEditID] = useState(null);
  function addTask(e) {
    console.log("addTask");
    e.preventDefault();
    dispatch({
      id: nanoid(),
      taskName: addFormTask.taskName,
      taskDescription: addFormTask.taskDescription,
      taskCompleted: addFormTask.taskCompleted,
    })

    alert("Tasks are: " + JSON.stringify(tasks));
    // const newTask = {
    //   id: nanoid(),
    //   taskName: addFormTask.taskName,
    //   taskDescription: addFormTask.taskDescription,
    //   taskCompleted: addFormTask.taskCompleted,
    // }
    // const newTasks = [...tasks, newTask];
    // setTasks(newTasks);
    // alert("New task added with name: " + newTask.taskName + " with task status is: " + newTask.taskCompleted)

  }
  //onchange
  function addTaskChange(e) {
    console.log("addTaskChange");
    const getFieldName = e.target.getAttribute('name');
    const getFieldValue = e.target.value;

    const newTaskForm = { ...addFormTask }
    newTaskForm[getFieldName] = getFieldValue;
    setAddFormTask(newTaskForm);
  }

  //later
  function isDone(e, task) {
    alert("Task selected is: " + JSON.stringify(task))
    task.taskCompleted = !task.taskCompleted
  }

  //later
  function editTask(e, task) {
    // console.log("The index is: " + index)
    // if (tasks[index].taskCompleted === false) {
    //   console.log('editTask');
    //   e.preventDefault();
    //   setIsEditID(tasks[index].id);
    //   const formValues = {
    //     taskName: tasks[index].taskName,
    //     taskDescription: tasks[index].taskDescription,
    //     taskCompleted: tasks[index].taskCompleted,
    //   }
    //   setEditFormTask(formValues);
    // } else {
    //   alert("Cannot change task!!!");
    // }
    if (task.taskCompleted === false) {
      alert('editTask');
      e.preventDefault();
      setIsEditID(task.id);
      const editForm = {
        taskName: task.taskName,
        taskDescription: task.taskDescription,
        taskCompleted: task.taskCompleted,
      }
      setEditFormTask(editForm);

    } else {
      alert("Cannot change task!!!");
    }
  }

  //later
  //onchange
  function editTaskChange(e) {
    console.log('editTaskChange');
    e.preventDefault();
    const getFieldName = e.target.getAttribute('name');
    const getFieldValue = e.target.value;
    const newTaskForm = { ...editFormTask }
    newTaskForm[getFieldName] = getFieldValue;
    console.log(newTaskForm)
    setEditFormTask(newTaskForm);
  }

  //later
  function submitChanges(e, index) {
    e.preventDefault();

    const editedTask = {
      id: nanoid(),
      taskName: editFormTask.taskName,
      taskDescription: editFormTask.taskDescription,
      taskCompleted: editFormTask.taskCompleted,
    }

    alert("Edit task is: " + JSON.stringify(editedTask))

    //tasks[index] = editedTask
    tasks[index] = editedTask

    setIsEditID(null);
  }


  function deleteTask(e, index) {
    e.preventDefault();

  }

  //later
  function cancelChanges(e) {
    e.preventDefault()
    console.log('cancelChanges');
    setIsEditID(null);
  }

  var taskList =
    tasks.map((task, index) => {
      return (
        <Fragment>
          {
            isEditID === task.id ? (
              <TaskEditable
                task={task}
                editTaskChange={(e) => editTaskChange(e)}
                editFormTask={editFormTask}
                cancelChanges={(e) => cancelChanges(e)}
                submitChanges={(e) => submitChanges(e, index)}
                index={index}
              />
            ) : (
              <TaskReadOnly
                task={task}
                deleteTask={() => dispatch(removeTaskFromList({
                  index: index,
                }))}
                index={index}
                isDone={(e) => isDone(e, task)}
                editTask={(e) => editTask(e, task)}
              />
            )
          }
        </Fragment>
      )
    }
    )

  return (
    <div>
      <div style={{ "float": "left" }}>
        <h1>Writing Task</h1>
        <TaskAddForm
          addTaskChange={addTaskChange}
          addTask={() => dispatch(addTaskToList({
            id: nanoid(),
            taskName: addFormTask.taskName,
            taskDescription: addFormTask.taskDescription,
            taskCompleted: addFormTask.taskCompleted,
          }))}
        //className="grid place-items-center h-screen"
        />
        <br />
        {
          taskList
        }
      </div>
      {/* <div style={{ "float": "right" }}>
        <h1>Tasks Completed</h1>
        {
          completedTaskList
        }
      </div> */}
    </div>
  );
}

export default HomePage