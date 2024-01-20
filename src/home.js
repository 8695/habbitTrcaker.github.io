import React from 'react'
import style from './Component/habbitList.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteHabbit } from './redux/slices/habbitSlice';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import ViewDetail from './Component/viewDetail';

export default function Home() {
    const [showWeek,setshowWeek]=useState(false);
    const habbit = useSelector((state) => state.habbitData.habbit);
     const dispatch= useDispatch();
/* function for remove the habbit*/
  const removeHabit=(id)=>{
    dispatch(deleteHabbit(id));
      toast.success("habbit Deleted",{
        position:"top-right",
        autoClose:5000,
        hideProgressBar : false,
        closeOnClick:true,
        pauseOnHover : true,
        draggable : true,
        progress : undefined,
        
      })
    }
      
    
  return (
    <div ClassName={style.container}>
    <div style={{padding:"20px"}}>
    <div className="card" style={{ width: "30rem", padding:"20px",backgroundColor:"#aed7d8" }}>
      <div className="card-body">
     
      <h5 className="card-title">Reading</h5>
      <span className={style.icon}><FontAwesomeIcon className="icons" icon={faTrash} style={{color: "#e71f08"}} onClick={()=>removeHabit(habbit.id)}/></span>
      
        <button className="btn btn-warning" style={{marginTop:"15px"}} >
          view Week
        </button>
        
      </div>
    </div>
    </div>


    </div>
  )
}
