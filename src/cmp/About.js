import React, { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return { count: state.count + 1, setText: state.setText }
        case "TOG":
            return { count: state.count, setText: !state.setText }
        default: return state
    }
}


export default function About() {
    const [state, dispatch] = useReducer(reducer, { count: 0, setText: true })

    return (
        <div style={{ textAlign: "center" }}>
            <span>{state.count}</span>
            <button onClick={() => {
                dispatch({ type: "INC" });
                dispatch({ type: "TOG" });
            }}
            >Increment</button>
            {state.setText && <p> This texts will toggle</p>}
        </div>
    )
}

