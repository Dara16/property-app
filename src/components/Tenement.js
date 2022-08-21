import React from 'react';

export default function Tenement({ tenement }) {
    return (
        <div>
            <h3>{tenement.name}</h3>
            <h4>{tenement.address}</h4>
        </div>
    )
}