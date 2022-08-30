import React from 'react'

export default function Band(props) {
    return (
        <div>
            <li id={props.band.id}>
                {props.band.name}
                <button onClick={() => props.deleteBand(props.band.id)}>DELETE</button>
            </li>
        </div>
    )
}
