import React, { useContext } from "react";
import {useUserContext} from '../hooks/useUserContext'

const User = ({ user }) => {
   const {state,dispatch}= useUserContext();
    const {id,username} = user;
    const handleDelete =(id)=>{
     dispatch({type:"DELETE_USER",payload:id});
    }
  return (
   <article className="user">
    <h2>{id}</h2>
    <p>{username}</p>
    <button onClick={()=>{handleDelete(id)}}>Delete</button>
   </article>
  );
};

export default User;