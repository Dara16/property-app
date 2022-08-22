import React, { useState, useEffect } from 'react';
import Tenement from './Tenement';
import { BASE_URL } from '../constraints/index';

export default function TenementsContainer() {
    const [tenements, setTenements] = useState(null);

    useEffect(() => {
        fetch(BASE_URL + 'tenements')
            .then(resp => resp.json())
            .then(json => setTenements(json))
    }, [])

    function populateTenements() {
        return tenements.map(tenement => <Tenement tenement={tenement} />)
    }

    return (
        <div>
            <h2>PROPERTIES</h2>
            {tenements && populateTenements()}
        </div>
    )
}