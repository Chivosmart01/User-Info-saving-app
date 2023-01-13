import React from "react";
import UserDataList from "./UserDataList";
import styles from "./UserDataLists.module.css";

const UserDataLists = (props) => {
  console.log(props.userDatas);
  

  return (
    <ul className={styles.lists}>
      {props.userDatas.map((userData) =>(
          <UserDataList
            username={userData.username}
            key={userData.id}
            age={userData.age}
          />
        )
      )}
    </ul>
  );
};

export default UserDataLists;
