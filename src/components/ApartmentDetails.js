import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index';

export default function TenementDetails() {
    const [apartment, setApartment] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'apartments/' + id)
            .then(resp => resp.json())
            .then(json => setApartment(json))
    }, [id])

    return (
        <div>
            <h2>Apartment Details</h2>
            {apartment && (
                <>
                <h4>{apartment.number}</h4>
                <p>Style: {apartment.style}</p>
                <p>Rent: {apartment.rent}</p>
                </>
            )}
        </div>
    )
}