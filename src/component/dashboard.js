import React, { useEffect, useState } from 'react'
// import './dash.css'
import './side.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaAddressCard,
    FaAdn,
    FaHouseUser,
    FaSchool,
    FaUniversity,
    FaMagnet,
    FaSearch,
    FaSignOutAlt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Dashboard = ({children})=> {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/addinfo",
            name:"ADD",
            icon:<FaUniversity/>
        },
        {
            path:"/",
            name:"LOGOUT",
            icon:<FaSignOutAlt/>
        }
      
    ]


    

    
  return (
    <div className='wrapper'>
        
        
    <div className="containe">
    <div><h2 className='tittle'>Welcome to E-Expo</h2></div>
    <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
        <div className="top_section">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">E-Expo</h1>
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
    <main>{children}</main>
 </div>


 </div>
);
};

export default Dashboard