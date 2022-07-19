import React, { useState } from "react";

function Activity(props) {

    return (
        <div id={props.key}>
            <h3>{props.name}</h3>
        </div>
    );

}

export default Activity;