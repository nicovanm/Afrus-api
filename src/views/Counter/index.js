import {useState} from 'react';
import Number from './components/Number';
import Button from './components/Button';

//Desestructuracion objeto:
// import React from 'react';
// const useState = React.useState;

function Counter(){
    const [count, setCount] = useState(0)

    //Desestructuracion arreglo:
    // const arrayUseState = useState(0)
    // const count = arrayUseState[0]
    // const setCount = arrayUseState[1]

    function handleAdd(){
        setCount(count+1)
        
        //NOTA: Los siguientes cambios no son correctos, porque no estoy llamando la funcion actualizadora setCount()
        // count++
        // count= count+1
    }

    function handleSubstract(){
        setCount(count-1)
    }

    return (
        <section id="counter">
            <h1>Counter</h1>
            <Button buttonText={"+"} handleClick={handleAdd}/>
            <Number number={count}/>
            <Button buttonText={"-"} disabled={count <=0 } handleClick={handleSubstract}/>
        </section>
    )
};

export default Counter;