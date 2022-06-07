import TaskReadOnly from '../components/HomePage/TaskReadOnly'
import TaskEditable from '../components/HomePage/TaskEditable'
import TaskAddForm from '../components/HomePage/TaskAddForm'
import TaskCompleted from '../components/HomePage/TaskCompleted'
import { useState, Fragment, useEffect } from 'react';
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counter";
// import { taskAddForm } from "../actions/taskAddForm";

function HomePage() {
  // const counter = useSelector((state) => state.counter);
  // const login_ = useSelector((state) => state.loginInfo.username);
  //const dispatch = useDispatch();
  const taskAddForm_ = useSelector((state) => state.taskAddForm)
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("random");
  }, [])

  // var infos = [{
  //   name: "Hoang",
  //   age: 18,
  //   hobbies: "football, basketball...",
  //   phoneNumber: "4123412",
  // },
  // {
  //   name: "Hoang 1",
  //   age: 19,
  //   hobbies: "football, volleyball...",
  //   phoneNumber: "72434127",
  // },
  // {
  //   name: "Hoang 2",
  //   age: 20,
  //   hobbies: "swimming, volleyball...",
  //   phoneNumber: "041234132",
  // }
  // ];
  const [tasks, setTasks] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState([]);
  const [addFormTask, setAddFormTask] = useState({
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
    const newTask = {
      id: nanoid(),
      taskName: addFormTask.taskName,
      taskDescription: addFormTask.taskDescription,
      taskCompleted: addFormTask.taskCompleted,
    }
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    console.log("New task added with name: " + newTask.taskName + " with task status is: " + newTask.taskCompleted)
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

  function isDone(e, index) {
    console.log("IsDone check");
    const formValues = {
      taskName: tasks[index].taskName,
      taskDescription: tasks[index].taskDescription,
      taskCompleted: !tasks[index].taskCompleted
    }
    const newTasks = [...tasks];
    newTasks[index] = formValues;
    setTasks(newTasks);
  }

  function editTask(e, index) {
    console.log("The index is: " + index)
    if (tasks[index].taskCompleted === false) {
      console.log('editTask');
      e.preventDefault();
      setIsEditID(tasks[index].id);
      const formValues = {
        taskName: tasks[index].taskName,
        taskDescription: tasks[index].taskDescription,
        taskCompleted: tasks[index].taskCompleted,
      }
      setEditFormTask(formValues);
    } else {
      console.log("Cannot change task!!!");
    }
  }

  //onchange
  function editTaskChange(e) {
    console.log('editTaskChange');
    e.preventDefault();
    const getFieldName = e.target.getAttribute('name');
    const getFieldValue = e.target.value;
    const newTaskForm = { ...editFormTask }
    newTaskForm[getFieldName] = getFieldValue;
    setEditFormTask(newTaskForm);
  }

  function submitChanges(e, index) {
    e.preventDefault();

    const editedTask = {
      id: nanoid(),
      name: editFormTask.taskName,
      description: editFormTask.taskDescription,
      isCompleted: editFormTask.taskCompleted,
    }

    const newTasks = [...tasks];
    newTasks[index] = editedTask;
    setTasks(newTasks);
    setIsEditID(null);
  }

  function deleteTask(e, index) {
    e.preventDefault();
    let newTasks = [];
    for (var i = 0; i < tasks.length; i++) {
      if (i !== index) {
        newTasks.push(tasks[i]);
      }
    }
    console.log(newTasks)
    setTasks(newTasks);
    console.log('deleteTask with index' + index);
  }

  function cancelChanges(e) {
    console.log('cancelChanges');
    setIsEditID(null);
  }

  // var list = infos.map((info) => {
  //   return (
  //     <Contacts
  //       name={info.name}
  //       age={info.age}
  //       hobbies={info.hobbies}
  //       phoneNumber={info.phoneNumber}
  //     />
  //   );
  // })

  function completedTask(e, index) {
    console.log("Task Completed with index " + index);
    const formValues = {
      taskName: tasks[index].taskName,
      taskDescription: tasks[index].taskDescription,
      taskCompleted: !tasks[index].taskCompleted
    }
    const newTasks = [...tasks];
    newTasks[index] = formValues;
    setTasks(newTasks);
  }

  var taskList =
    tasks.map((task, index) => {
      return (
        <Fragment>
          {
            isEditID === task.id ? (
              <TaskEditable
                editTaskChange={editTaskChange}
                editFormTask={editFormTask}
                cancelChanges={cancelChanges}
                submitChanges={submitChanges}
                index={index}
              />
            ) : (
              task.taskCompleted === false ? (
                <TaskReadOnly
                  tasks={tasks}
                  completedTask={completedTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                  isDone={isDone}
                  index={index}
                />
              ) : (console.log('LOLLMAo'))
            )
          }
        </Fragment>
      )
    }
    )

  var completedTaskList =
    tasks.map((task, index) => {
      return (
        <Fragment>
          {
            task.taskCompleted === true ? (<TaskCompleted
              tasks={tasks}
              deleteTask={deleteTask}
              index={index}
            />) : (
              console.log("LOL")
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
          addTask={addTask}
        //className="grid place-items-center h-screen"
        />
        <br />
        {
          taskList
        }
      </div>
      <div style={{ "float": "right" }}>
        <h1>Tasks Completed</h1>
        {
          completedTaskList
        }
      </div>
    </div>
  );
}

export default HomePage