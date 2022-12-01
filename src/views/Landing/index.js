function Landing(props){

    function returnLastLetter(gender){
        if(gender==="M") return "o"
        else if(gender==="F") return "a"
        else return "x"
    }

    const lastLetter = returnLastLetter(props.userGender)
    
    return(
        <h1>Bienvenid{lastLetter} {props.userName} a mi página!</h1>
    )
};

export default Landing;