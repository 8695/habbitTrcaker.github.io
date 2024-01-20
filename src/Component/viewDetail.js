import React from 'react'
import style from './viewWeek.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faCheck,faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';



function ViewDetail() {
  const habbit = useSelector((state) => state.habbitData.habbit);
     
  
  return (
    <div >

    <h1 className={style.heading}> Detail of weekly habbit</h1>
    {habbit.map((habit)=>
      (
        <div key={habit.id} className={style.weekView}>
        <h1>{habit.name}</h1> 
        <div className={style.weekContainer}>
        {habit.week.weekLog.map((dayData)=>(
          <div key={dayData.id} className={style.statusContainer}>
        <p>{dayData.day}</p><span>{dayData.dd}</span>

        <div > <button className={style.btn}><FontAwesomeIcon icon={faCheck} /></button>
        <button className={style.btn}><FontAwesomeIcon icon={faXmark} /></button>
        <button className={style.btn}><FontAwesomeIcon icon={faMinus} /></button>
        </div>
        </div>
        ))}
        </div>
        <NavLink to="/" style={{textDecoration:"none"}}><button className="btn btn-warning" style={{marginTop:"10px"}}> back</button></NavLink>
       <br></br>
        </div>
        )
        )}
       
    </div>
   
  )
  
}

export default ViewDetail;