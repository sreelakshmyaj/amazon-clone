//data layer to track products in cart

import { createContext, useContext, useReducer } from "react";

//data layer
export const StateContext = createContext();

//provider
export const StateProvider = ({ reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)