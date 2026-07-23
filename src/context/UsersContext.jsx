// Create Context

import { createContext , useReducer, useState} from 'react';
import { initialState,reducer } from '../reducer/usersReducer';
export const UsersContext = createContext({})

const UserProvider = ({children})=>{
  const [state,dispatch]=useReducer(reducer,initialState)
  const [users,setUsers]=useState([]);

      return  <UsersContext.Provider value={
        {
          state,dispatch,users,setUsers
        }
      }>
        {children}
      </UsersContext.Provider>
     
}

export default UserProvider