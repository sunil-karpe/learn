import { useState } from "react";

const UseState=()=>{

    const [count, setCount] = useState(0)
    const [data,setData]=useState({name:"guest"+count,company:"xyz"})

    const addHandler=()=>{
        
        setCount(prevState=>prevState+1)

        setData((prevState)=>{
            console.log(data)
            return (
                
                {...prevState,name:"guest"+(count+1)}

                // {name:"guest"}
                // if above line is returned then the data object overwritten with only one properties i.e name. and other properties will be removed.
            
            
            )
                
        })
    }

    const increment=()=>{

        // setCount(count+1);
        // setCount(count+1);
        //the above two line will increment the count by one but it is suppose to be incemented by twice as the setCount has been called two times.
        //Thats why we use below approach to make sure the we deals with the latest value of state while performing operation on it.
        
        setCount(prevState=>prevState+1)

    }

    return(
        <div>
            <h2>State manipulation in function based component</h2>
            <div>{data.name}</div>
            <button onClick={addHandler}>Add</button> 




            {/* Simple use of useState */}
            {/* <span>{count}</span>
            <button onClick={increment}>+</button> */}
        </div>
    )

}

export default UseState;