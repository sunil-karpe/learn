import React from 'react'
import { useState ,useEffect} from 'react'

//Before learning the concept of useEffect, Learn the useState for better understanding.
const UseEffect = () => {

    const [pageType, setPageType] = useState("users");
    const [itemdata,setItemData]=useState([]);

    //Will run everytime when the state(only the page one) is changed/when the component is rendered first time
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${pageType}`)
        .then(res=>res.json())
        .then(json=>{
            setItemData(json)})
    },[pageType]) //we can defined multiple state within the '[]' to call useEffect when any one state is changed.

    //Only run single time when the component is mounted

    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/${pageType}`)
    //     .then(res=>res.json())
    //     .then(json=>{
    //         console.log(json)
    //         setItemData(json)})
    // },[])

    //Will run every time when any of the state is changed/when the component is rendered first time

    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/${pageType}`)
    //     .then(res=>res.json())
    //     .then(json=>{
    //         console.log(json)
    //         setItemData(json)})
    // })

    return (
        <div>

            <h2>useEffect for performing the actions when the state changes</h2>

            <button onClick={()=>{setPageType((prevState)=>"users")}}>Users</button>
            <button onClick={()=>{setPageType((prevState)=>"posts")}}>Posts</button>
            <button onClick={()=>{setPageType((prevState)=>"comments")}}>Comments</button>

            <h3>{pageType}</h3>

            {itemdata.map((item,key)=>{
                return <p key={key}>{JSON.stringify(item)}</p>
            })}

        </div>
    )
}

export default UseEffect
