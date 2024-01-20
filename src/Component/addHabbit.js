import React, { useState } from "react";
import "./addHabbit.css";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { habbitAdd } from "../redux/slices/habbitSlice";

export default function AddHabbit({ onClose }) {
  const [habbitName, sethabbitName] = useState("");

  const dispatch =useDispatch();

  const handleAddhabbit =(e)=>{
    e.preventDefault();
    if(habbitName){
      dispatch(habbitAdd(habbitName));
      toast.success("Habbit Added sucessfully",{
        position:"top-right",
        autoClose:5000,
        hideProgressBar : false,
        closeOnClick:true,
        pauseOnHover : true,
        draggable : true,
        progress : undefined,
        theme:"colored"
      })
      sethabbitName(""); 
    }
    else{
      alert("enter habbit")
    }
    
  }

  return (
    <div className="addHabbit">
      <h1> New Habbit</h1>
      <span className="cross-btn btn btn-outline-danger" onClick={onClose}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </span>
      <input
        className="form-control"
        type="text"
        placeholder="enter habbit name"
        value={habbitName}
        onChange={(e)=>sethabbitName(e.target.value)}
      />
      <button type="button" className="btn btn-outline-info ml-2 mt-4" onClick={handleAddhabbit}>
        Add Habbit
      </button>
    </div>
  );
}
