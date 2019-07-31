import React from 'react';
import logo from "../../../src/pokeball.png"
import { NavLink } from 'react-router-dom';

const pokeball = (props) => {
   return( <div>
        <h1 className="homepage-title">Shuayb's Pokédex</h1>
        <NavLink to="/SearchScreen">
        <img src={logo} alt="logo" />
        </NavLink>
        <p className="search">Click on the Ball to enter the Pokédex</p>
    </div>
   )
   };

export default pokeball;