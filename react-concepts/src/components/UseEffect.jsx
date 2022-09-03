import React from 'react'
import { useState ,useEffect} from 'react'

//Before learning the concept of useEffect, Learn the useState for better understanding.
const UseEffect = () => {

    const [page, setPage] = useState("users");
    const [itemdata,setItemData]=useState([]);

    //Will run everytime when the state(only the page one) is changed/when the component is rendered first time
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${page}`)
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            setItemData(json)})
    },[page]) //we can defined multiple state within the '[]' to call useEffect when any one state is changed.

    //Only run single time when the component is mounted

    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/${page}`)
    //     .then(res=>res.json())
    //     .then(json=>{
    //         console.log(json)
    //         setItemData(json)})
    // },[])

    //Will run every time when any of the state is changed/when the component is rendered first time

    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/${page}`)
    //     .then(res=>res.json())
    //     .then(json=>{
    //         console.log(json)
    //         setItemData(json)})
    // })

    return (
        <>

            <div>UseEffect</div>

            <button onClick={()=>{setPage("users")}}>Users</button>
            <button onClick={()=>{setPage("posts")}}>Posts</button>
            <button onClick={()=>{setPage("comments")}}>Comments</button>

            <h2>{page}</h2>

            {itemdata.map(item=>{
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}

export default UseEffect