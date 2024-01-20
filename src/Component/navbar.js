import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddHabbit from './addHabbit';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    const [showaddHabbit,setshowaddHabbit]=useState(false);
    
    /*function AddForm is used for render the add habbit form */
    const addForm =(e)=>{
     e.preventDefault();
     setshowaddHabbit(!showaddHabbit)
    }

    const closeAddHabbit=()=>{
        setshowaddHabbit(false);
    }
  return (
    <div>
    <nav className="navbar custom-bg-color">
    <div className="container-fluid">
      <h3 className="navbar-brand">Habbit tracker</h3>
       <button className="btn btn-success" type="submit" onClick={addForm}>Add Habbit</button>
       
      </div>
      </nav>
      {showaddHabbit && <AddHabbit onClose={closeAddHabbit}/>}
    
    </div>
  
    
  )
}


 
