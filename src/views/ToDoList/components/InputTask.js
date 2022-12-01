function InputTask(props){
    return(
        <div>
            <input value={props.currTask} onChange={props.handleChange} type="text"/>
            <button onClick={props.handleClick}>Add Task</button>
        </div>
    )
}

export default InputTask;