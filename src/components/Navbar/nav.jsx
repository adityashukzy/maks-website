import React from 'react';
import {NavLink} from 'react-router-dom';
export const nav = (props) => {
    const clickHandler=()=>{
        localStorage.removeItem('email')
    }
    switch (props.pathname) {
        case ("/admin"): {
            return (
                <nav>
                    <ul className="Navbar">
                        <li className="logo"><h1>
                            <img
                                id="image"
                                style={{height:"108px",width:"108px"}}
                                src="https://maks-images-aws-bucket.s3.ap-south-1.amazonaws.com/maks-logo.png"
                                alt="icon"
                            />
                        </h1></li>
                        <li>
                            <NavLink to="/"
                                style={{ textDecoration: "none", color: "white",float:"right", fontSize:"1.5rem" }} onClick={clickHandler}>Logout</NavLink>
                        </li>
                    </ul>
                </nav>
            );
        }
        default: {
            return (
                <>
                </>
            );
        }
    }
}