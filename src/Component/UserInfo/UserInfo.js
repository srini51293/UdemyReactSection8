
import Card from "../Card/Card";
import React, { useState } from "react";
import styles from './UserInfo.module.css'
const UserInfo = (props) => {
  const [cardDisplay, setCardDisplay] = useState(false);
  const emptyInvalidInput =
    "Please Enter a valid name and age(non empty values).";
  const negativeInvalidInput = "Please enter a valid age (>0).";
  const [propsToChild, setPropsToChild] = useState("");
  const onClickHandler = (event) => {
    event.preventDefault();
    if (
      event.target[0].value.trim().length === 0 ||
      event.target[1].value.length === 0
    ) {
      setCardDisplay(true);
      setPropsToChild(emptyInvalidInput);
      return;
    } else if (+event.target[1].value <= 0) {
      setCardDisplay(true);
      setPropsToChild(negativeInvalidInput);
      return;
    }
    props.userInfoToDisplay(event.target[0].value,+event.target[1].value)
    event.target[0].value="";
    event.target[1].value="";
  };
  const setCardValueHandler = (cardvalue) => {
    setCardDisplay(cardvalue);
  };
  return (
    <div>
      <form onSubmit={onClickHandler}>
        <div className={styles['form-control']}>
          <label>Username </label>
          <input type="text" />
        </div>
        <div className={styles['form-control']}>
          <label>Age(Years)</label>
          <input type="number" />
        </div>
        <div>
          <button className={styles.button}>Add User</button>
        </div>
      </form>
      {cardDisplay && (
        <Card
          displayValue={cardDisplay}
          messages={propsToChild}
          setCardValue={setCardValueHandler}
        ></Card>
      )}
    </div>
  );
};
export default UserInfo;
