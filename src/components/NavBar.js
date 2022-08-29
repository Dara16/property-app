import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tenements">Properties</NavLink>
                <NavLink to="/apartments">Apartments</NavLink>
                <NavLink to="/layouts">Layouts</NavLink>
                <NavLink to="/occupants">Occupants</NavLink>
            </div>
        </div>
    )
}