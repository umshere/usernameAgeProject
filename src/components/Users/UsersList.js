import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  console.log("listuser list ", props.userList);

  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map((user) => (
          <li key={Math.random().toString()}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
