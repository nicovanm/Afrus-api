function TaskList(props){
    return(
        <div>
            <ul>
                {props.tasks.map(
                    function(task, index){
                        return <li key={index}>{task}<button onClick={()=>props.handleDelete(index)}>Delete</button></li>
                    }
                )
                }
            </ul>
        </div>
    )
}

export default TaskList;