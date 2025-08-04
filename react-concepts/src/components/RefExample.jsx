import { useEffect, useRef, useState } from "react"



export const RefExample = () =>{

    const[username,setUsername] = useState('');

    /*it will lead to infinite loop
    const[renderedCount, setRenderedCount] = useState(0);
    useEffect(()=>{
        setRenderedCount((prevCount) => prevCoufrnt+1)
    })
        */

    //That's why use ref over state
    const renderedCount = useRef(1);
    useEffect(()=>{
        renderedCount.current = renderedCount.current+1;
    })    

    return(
        <div>
            <h2>Example 1 of useRef hook</h2>
            <p>Suppose if there is usecase of maintaining count of how many times component re-renders, in that case if we suppose use the state variable then, it will lead to 
                infinite loop, as when component re-renders, state changes to increase the count,
                but as state changes, component again re-renders.
            </p>

            <input value={username} type="text" onChange={(e)=>setUsername(e.target.value)}/>
            <p>Hello, My name is {username} and count is {renderedCount.current}</p>
        </div>
    )
}


export const RefExampleSec = () =>{

    const[username,setUsername] = useState('');
    const prevUsername = useRef('');
    useEffect(()=>{
        prevUsername.current = username;
    },[username])    

    return(
        <div>
            <h2>Example 2 of useRef hook</h2>
            <p>Storing the prev state value</p>
            <input value={username} type="text" onChange={(e)=>setUsername(e.target.value)}/>
            <p>Hello, My name is {username} and my older name was {prevUsername.current}</p>
        </div>
    )
}

export const RefExampleThird = () =>{

    const[username,setUsername] = useState('');
    const inputRef = useRef('');


    function focusElement(){
        inputRef.current.focus();
    }
  

    return(
        <div>
            <h2>Example 3 of useRef hook</h2>
            <p>Referncing the DOM element</p>
            <input ref={inputRef} value={username} type="text" onChange={(e)=>setUsername(e.target.value)}/>
            <button onClick={focusElement}>focus input</button>
        </div>
    )
}  