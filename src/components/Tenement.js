import React from 'react';

export default function Tenement({ tenement }) {
    return (
        <div>
            <h3>Name: {tenement.name}</h3>
            <h4>Location: {tenement.address}</h4>
        </div>
    )
}