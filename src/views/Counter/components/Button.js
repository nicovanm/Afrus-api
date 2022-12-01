function Button(props){
    return(
        <button disabled={props.disabled} onClick={props.handleClick}> 
            {props.buttonText}
        </button>
    )
};

export default Button;