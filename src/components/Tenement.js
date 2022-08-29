import React from 'react';
import { Link } from "react-router-dom";

export default function Tenement({ tenement }) {
    return (
        <div>
            <Link to={`/tenements/${tenement.id}`}>
                <h3>{tenement.name}</h3>
            </Link>
            <h4>Location: {tenement.address}</h4>
        </div>
    )
}