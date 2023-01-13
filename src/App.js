import React, { useState } from "react";
import styles from "./App.module.css";
import UserDataLists from "./components/UserDataLists";
import UserForm from "./components/UserForm";

const Dummy_Texts = [
  { username: "Yusuf", age: 25 },
  { username: "Azeez", age: 12 },
];

function App() {
  const [userInfo, setUserInfo] = useState(Dummy_Texts);

  const saveEnteredDataHanler = (enteredUserInfo) => {
    setUserInfo((prev) => {
      // return {  enteredUserInfo, ...prev };
      const updatedGoals = [...prev];
      updatedGoals.unshift({username:enteredUserInfo.username, age: enteredUserInfo.age, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  console.log(userInfo);
  
  return (
    <div className={styles.app}>
      <UserForm enteredDataTexts={saveEnteredDataHanler} />
      <UserDataLists userDatas={userInfo} />
    </div>
  );
}

export default App;
