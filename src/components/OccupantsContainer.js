import React, { useState, useEffect } from 'react';
import Occupant from './Occupant'
import { BASE_URL } from '../constraints/index';

export default function OccupantsContainer() {
    const [occupants, setOccupants] = useState(null);

    useEffect(() => {
        fetch(BASE_URL + 'occupants')
            .then(resp => resp.json())
            .then(json => setOccupants(json))
    }, [])

    function populateOccupants() {
        return occupants.map(occupant => <Occupant occupant={occupant} />)
    }

    return (
        <div>
            <h2>Occupants</h2>
            {occupants && populateOccupants()}
        </div>
    )
}