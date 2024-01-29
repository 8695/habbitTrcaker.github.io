//Importing required modules and actions:
import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { habitDone, habitUnDone, habitNone } from "../redux/slices/habbitSlice";
import './dayWeek.css';
import '../index.css'

// DayView component displays a single day's information and allows the user to interact with icons to update the habit status using Redux actions.
const DayView = ({ day }) => {
  const today = new Date();
  const todayDay = today.getDay();
  const dispatch = useDispatch();

  const markToDone = () => {
    if (day.id > todayDay) {
      alert("You cannot change your next day's status");
      return;
    }
    
    dispatch(habitDone({ habitId: day.id, dayIndex: day.id }));
  }

  const markToUnDone = () => {
    if (day.id > todayDay) {
      alert("You cannot change your next day's status");
      return;
    }
    dispatch(habitUnDone({ habitId: day.id, dayIndex: day.id }));
  }

  const markToNone = () => {
    if (day.id > todayDay) {
      alert("You cannot change your next day's status");
      return;
    }
    dispatch(habitNone({ habitId: day.id, dayIndex: day.id }));
  }

  return (
    <>
      <FontAwesomeIcon
        icon={faCheckCircle}
        className={day.isDone === true ? "circle-icon active" : "circle-icon"}
        onClick={markToDone}
      />
      <FontAwesomeIcon
        icon={faTimesCircle}
        className={day.isDone === false ? "circle-icon active" : "circle-icon"}
        onClick={markToUnDone}
      />
      <FontAwesomeIcon
        icon={faMinusCircle}
        className={day.isDone === "" ? "circle-icon active" : "circle-icon"}
        onClick={markToNone}
      />
    </>
  );
};

export default DayView;
