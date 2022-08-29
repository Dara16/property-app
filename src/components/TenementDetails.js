import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints/index';

export default function TenementDetails() {
    const [tenement, setTenement] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'tenements/' + id)
            .then(resp => resp.json())
            .then(json => setTenement(json))
    }, [id])

    return (
        <div>
            <h2>PROPERTY DETAILS</h2>
            {tenement && (
                <>
                <h4>{tenement.name}</h4>
                <p>Location: {tenement.address}</p>
                </>
            )}
        </div>
    )
}
