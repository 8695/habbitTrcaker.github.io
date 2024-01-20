import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from"./habbitList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteHabbit } from "../redux/slices/habbitSlice";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { NavLink } from "react-router-dom";



export default function Habbitlist() {

  //get habbits data from store
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
    <div className={style.container}>
      {habbit.map((data) => (
        <div style={{padding:"20px"}}>
        <div key={data.id} className="card" style={{ width: "30rem", padding:"20px",backgroundColor:"#aed7d8" }}>
          <div className="card-body">
         
          <h5 className="card-title">{data.name}</h5>
          <span className={style.icon}><FontAwesomeIcon className="icons" icon={faTrash} style={{color: "#e71f08"}} onClick={()=>removeHabit(data.id)}/></span>
          
            <button className="btn btn-warning" style={{marginTop:"15px"}} >
              <NavLink to='/viewDetail' className={style.link}>view Week</NavLink> 
            </button>
            
          </div>
        </div>
       
        </div>
        ))}
       
    </div>
  );
}
