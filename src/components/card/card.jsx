import React from 'react'
import './card.css'

export const Card = (props) => (
    <div className="card-container">
        <img alt="image" src={`https://robohash.org/${props.user.id}/?set=set2&size=180x180`} />
        <h1 key={props.user.id}>{props.user.name}</h1>
        <p>{props.user.email}</p>
    </div>
);