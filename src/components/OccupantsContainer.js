import React, { useState, useEffect } from 'react';
import Occupant from './Occupant'
import OccupantForm from './OccupantForm'
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

    function createOccupant(occupant) {

        fetch(BASE_URL + "/occupants", {
            method: "POST",
            body: JSON.stringify(occupant),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => setOccupants([...occupants, json]))
    
    }

    return (
        <div>
            <h2>Add New Occupant</h2>
            <OccupantForm createOccupant={createOccupant} />
            <h2>Occupants</h2>
            {occupants && populateOccupants()}
        </div>
    )
}