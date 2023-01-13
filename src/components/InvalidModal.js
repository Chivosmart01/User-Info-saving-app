import React,{useState} from "react";
import styles from "./InvalidModal.module.css"
import Button from "./UI/Button";

const InvalidModal = (props) => {

  function removeModalHandler(e) {
    e.preventDefault();
  }


  return (
    <article className={styles.article}>
      <div className={styles.backdrop} onClick={removeModalHandler}></div>
      <form className={styles.form} >
        <header className={styles.header}>
          <h2>Invalid Input</h2>
        </header>
        <main className={styles.main}>
          <p>{props.message}</p>
        </main>
        <div>
          <Button onClick={removeModalHandler} className={styles.button}>
            okay
          </Button>
        </div>
      </form>
    </article>
  );
};

export default InvalidModal;
