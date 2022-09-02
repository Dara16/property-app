import React from 'react';

export default function Occupant({ occupant }) {
    return (
        <div>
            <h3>Name: {occupant.name}</h3>
            <h4>Contact: {occupant.contact}</h4>
            <h4>Lease End: {occupant.lease_end}</h4>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}