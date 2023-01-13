import React from "react";
import styles from "./UserDataList.module.css";

const UserDataList = (props) => {
//   console.log(props.username);

  return (
      <li>
        {`${props.username} ${props.age} (Years Old)`}
      </li>
  );
};

export default UserDataList;
