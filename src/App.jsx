import React from "react";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UserProvider from "./context/UsersContext";
const App = () => {

  return (
    <UserProvider>
   <div>
      <NewUser />
      <Users/>
    </div>
    </UserProvider>


  );
};

export default App;