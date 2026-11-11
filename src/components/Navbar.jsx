import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar(){
    return (    
        <nav>
            <div>FacttoryPulse</div>
            <div>
                <navLink to='/'>TAbleau de bord</navLink>
                <navLink to='/machines'>Gestion des machines</navLink>
                <navLink to ='/machines/new'>ajouter une machines</navLink>
            </div>
        </nav>
    );
}

export default Navbar;