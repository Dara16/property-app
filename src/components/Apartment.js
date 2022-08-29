import React from 'react';
import { Link } from "react-router-dom";

export default function Apartment({ apartment }) {
    return (
        <div>
            <Link to={`/apartments/${apartment.id}`}>
                <h3>{apartment.number}</h3>
            </Link>
            <h4>Style: {apartment.style}</h4>
            <h4>Rent: ${(apartment.rent/100).toFixed(2)}</h4>
        </div>
    )
}