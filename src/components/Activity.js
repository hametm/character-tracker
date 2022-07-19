import React, { useState } from "react";

function Activity(props) {

    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.time}</p>
            <p>{props.location}</p>
            <p>{props.notes}</p>
        </div>
    );

}

export default Activity;