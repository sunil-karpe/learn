import { useEffect, useMemo, useState } from "react"


export const MemoExample = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // const computatedNumber = useMemo(()=>{
    //     slowFunction(number);
    // })

    /*use case-1 even if component re-renders due to other state(dark), then function will not executed
    until number state is changed*/
    const computatedNumber = useMemo(() => {
        slowFunction(number);
    }, [number])

    /*use case 2, if the number state changes and component re-renders, then below code will
    not be executed as dark state is unchanged, which in turn useEffect will not called.
    but if useMemo wouldnt have been used then then useEffect would have been called each time
    the component re-renders no matter dark is changed or not*/
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log('theme changed!!!');
    }, [themeStyles])



    return (
        <div>
            <h2>Example of useMemo hook</h2>
            <p>
                useMemo is a React Hook that helps you optimize performance by memoizing (caching) the result of a computation, so it doesn’t re-run unless its dependencies change.
            </p>
            <p>It is used to optimise the code or function calls.
                If one of the state value changes and component re-renders, then there might be
                some function which is getting called even if the input parameter doesnt
                changes. to optimise this scenario memo can be used.
            </p>

            <input type="number" value={number} onChange={(e) => { setNumber(parseInt(e.target.value)) }} />
            <button onClick={() => { setDark(prevDark => !prevDark) }}>Change theme</button>
            <div style={themeStyles}>Number: {computatedNumber}</div>

        </div>
    )
}

function slowFunction(num) {
    for (let i = 0; i < 1000000000; i++) { };
    return num * 2;
}