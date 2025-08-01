import { useState, createContext,useContext } from "react";

const GlobalStateContext = createContext(null);

export const ContextHook = () => {


    const [isToggle, setIsToggle] = useState(false);


    return (
        // <div>
        //     <h2>Props drilling</h2>
        //     <p>State can be passed down to grand child component with the help of
        //         props concepts, but it will create a un-necessary re-render of child component
        //         which will don't have any use of state that is being passed to grand child(props drilling)</p>

        //     <ChildToggle setIsToggle={setIsToggle}/> 
        //     <ChildDisplay isToggle={isToggle}/>   
        // </div>
        <GlobalStateContext.Provider value={{setIsToggle,isToggle}}>
            <div>
                <h2>Passing the states to child component in a better way</h2>
                <p>Import the createContext and create a globalContext variable</p>
                <p>wrap the main component under which all the child components are present
                    with GlobalStateContext.Provider tag and add attribute value. inside value,
                    append all the states which may be utilized in child/ grand child
                </p>
                <p>Inside child/ grand child use useContext hook to get the state from 
                    Globalcontext
                </p>

                <UpdatedChildToggle setIsToggle={setIsToggle} />
                <UpdatedChildDisplay isToggle={isToggle} />
            </div>
        </GlobalStateContext.Provider>
    )
}


const UpdatedChildToggle = () => {

    const {setIsToggle} = useContext(GlobalStateContext);

    return (
        <div>
            <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
        </div>
    )
}

const UpdatedChildDisplay = () => {
    const {isToggle} = useContext(GlobalStateContext);
    return (
        // meant for doing some business logic
        <div>
            <GrandChild isToggle={isToggle} />
        </div>
    )
}

const UpdatedGrandChild = () => {
    const {isToggle} = useContext(GlobalStateContext);
    return (
        <div>
            <span>Current State: {isToggle ? "ON" : "OFF"}</span>
        </div>
    )
}


const ChildToggle = ({ setIsToggle }) => {
    return (
        <div>
            <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
        </div>
    )
}

const ChildDisplay = ({ isToggle }) => {
    return (
        // meant for doing some business logic
        <div>
            <GrandChild isToggle={isToggle} />
        </div>
    )
}

const GrandChild = ({ isToggle }) => {
    return (
        <div>
            <span>Current State: {isToggle ? "ON" : "OFF"}</span>
        </div>
    )
}


