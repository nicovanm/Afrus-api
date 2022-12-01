import {useState} from "react"
import InputTask from "./components/InputTask";
import TaskList from "./components/TaskList";

function ToDoList(){
    const [tasks, setTasks] = useState([])
    const [currTask, setCurrTask] = useState("")

    const handleChange = function(event){
        setCurrTask(event.target.value)
    }

    const handleClick= function(){
        //tasks.push(currTask) No usamos push porque hay que usar la funcion actualizadora setTasks
        
        const tasksCopy = tasks.slice()
        tasksCopy.push(currTask)
        setTasks(tasksCopy)

        setCurrTask("")

        // setCurrTask([...tasks, currTask])

    }

    const handleDelete = function(deleteIndex){
        const filteredTasks = tasks.filter(
            function(task, index){
                return index !== deleteIndex
            }
        )
        setTasks(filteredTasks)
    }

    return(
        <section id="toDoList">
            <h1>To Do List</h1>
            <InputTask currTask={currTask} handleChange={handleChange} handleClick={handleClick}/>
            <TaskList handleDelete={handleDelete} tasks={tasks}/>
        </section>
    )
}

export default ToDoList;