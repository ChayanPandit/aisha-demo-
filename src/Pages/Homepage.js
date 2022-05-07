import React from 'react';
import './homepage.css';
import {useState,useEffect} from 'react';
import girly from '../images/girly.gif';
import {useNavigate} from 'react-router-dom';

function Homepage ({
    username ,
    setusername
}) {
    
    console.log(username);

    const navigate=useNavigate();

  return (
        <div className="panel1">
            <div className="pricing-plan1">
                <img src={girly} className="logo1" alt=""/>
                <ul className="pricing-features1">
                    <h1 className="greetname1">Hi, I'm Aisha</h1>
                    <li className="pricing-features-item1">What's your name?</li>
                    <input className="pricing-features-item2" name="username" value={username} onChange={(e)=>setusername(e.target.value)}placeholder="A nickname you prefer..."/>
                </ul>

                <button 
                        className="pricing-button1" 
                        onClick={()=>{
                            setusername(username);
                            navigate("/mainpage");
                            localStorage.setItem('Name', username);
                        }}
                    >
                    Enter
                </button>
            </div>
        </div>
  )
}

export default Homepage