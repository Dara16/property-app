import React, { useState, useEffect } from 'react';
import Apartment from './Apartment';
import { BASE_URL } from '../constraints/index';

export default function ApartmentsContainer() {
    const [apartments, setApartments] = useState(null);

    useEffect(() => {
        fetch(BASE_URL + 'apartments')
            .then(resp => resp.json())
            .then(json => setApartments(json))
    }, [])

    function populateApartments() {
        return apartments.map(apartment => <Apartment apartment={apartment} />)
    }

    return (
        <div>
            <h2>Apartments</h2>
            {apartments && populateApartments()}
        </div>
    )
}