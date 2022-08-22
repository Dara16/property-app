import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/tenements">Properties</Link>
                <Link to="/apartments">Apartments</Link>
                <Link to="/layouts">Layouts</Link>
                <Link to="/occupants">Occupants</Link>
            </div>
        </div>
    )
}