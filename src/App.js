import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, addUserList] = useState([]);
  const addUserToListHandler = (user) => {
    addUserList((prevUserList) => {
      console.log(prevUserList);
      return[...prevUserList, user] ;
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserToListHandler}></AddUser>
      <UsersList userList={userList}></UsersList>
    </>
  );
}

export default App;
