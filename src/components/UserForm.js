import React, { useState } from "react";
import InvalidModal from "./InvalidModal";
import Button from "./UI/Button";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // const [invalid, setInvalid] = useState(true)
  const [errorOutput, setErrorOutput] = useState();

  const usernameInputHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageInputHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredAge.trim() === "" || enteredUsername.trim() === "") {
      setErrorOutput({
        message: "Please enter a valid username or age",
      });

      // setInvalid(false)
     return
    }

    if (enteredAge < 0) {
      setErrorOutput({
        message: "Please enter a valid age ( > 0).",
      });

    }

    // setInvalid(true)
    const enteredData = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    };

    props.enteredDataTexts(enteredData);

    // console.log(enteredData)
    setEnteredAge("");
    setEnteredUsername("");
  };

  const removeModalHandler = (e) => {
      e.preventDefault()
     setErrorOutput()
  }
//   function removeModalHandler(e) {
//     e.preventDefault();
//     errorOutput()
//   }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <section className={styles["form-section"]}>
        <div>
          <label for="username-id">Username</label>
          <input
            value={enteredUsername}
            onChange={usernameInputHandler}
            id="username-id"
            type="text"
          />
        </div>
        <div>
          <label for="age-id">Age(Years)</label>
          <input
            value={enteredAge}
            onChange={ageInputHandler}
            type="number"
            id="age-id"
          />
        </div>
      </section>
      {errorOutput && (
        <InvalidModal
          onRemoveModal={removeModalHandler}
          message={errorOutput.message}
        />
      )}
      <Button>Add User</Button>
    </form>
  );
};

export default UserForm;
