import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";
import Wrapper  from "../Helpers/Wrapper";

const AddUser = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState();
  const addUserListener = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const age = ageRef.current.value;
    if (username.trim().length !== 0 && age.trim().length !== 0 && +age > 0) {
      props.onAddUser({ username: username, age: age });

     usernameRef.current.value ="";
     ageRef.current.value ="";
    } else {
      if (age < 1) {
        setError({
          title: "Invalid Age",
          message: "Please set the age above 1",
        });
        return;
      } else if (username.trim().length === 0) {
      }
      setError({
        title: "Invalid username",
        message: "Please set the username",
      });
      return;
    }
  };
 
  const errorHandler = () => {
    setError();
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModel
        onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModel>
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserListener}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            ref={usernameRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
