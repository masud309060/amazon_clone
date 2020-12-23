import { createContext, useContext, useReducer } from 'react'

// Prepare the dataLayer 
export const StateContext = createContext()

// Wrap the app and provide the dataLayer 
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


// pull the information from the data layer 
export const useStateValue = () => useContext(StateContext)
