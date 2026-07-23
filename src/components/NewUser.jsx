import React, { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import { useUserContext } from "../hooks/useUserContext";
const NewUser = () => {
  const {users, setUsers}= useUserContext();
  const [username, setUsername] = useState("");
  const {state,dispatch}=useUserContext();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleForm=(e)=>{
      e.preventDefault();
      const newUser = {id:new Date().getTime().toString(),username:username};
      setUsers(prevUser =>[...prevUser,newUser])

      dispatch({type:"ADD_USER",payload:newUser})
      setUsername("");
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form  onSubmit={handleForm}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default NewUser;