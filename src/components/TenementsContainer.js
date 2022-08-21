import React, { useState, useEffect } from 'react';
import Tenement from './Tenement';

export default function TenementsContainer() {
    const [tenements, setTenements] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/tenements')
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