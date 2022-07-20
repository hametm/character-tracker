import React, { useState } from "react";
import EditActivity from "./EditActivity";

function Activity(props) {
    const [show, setShow] = useState(1);
    const [name, setName] = useState(props.name);
    const [time, setTime] = useState(props.time);
    const [location, setLocation] = useState(props.location);
    const [notes, setNotes] = useState(props.notes);

    const onEditClick = (newName, newTime, newLocation, newNotes) => {
        setName(newName);
        setTime(newTime);
        setLocation(newLocation);
        setNotes(newNotes);
        setShow(1);
    }

    const showEditForm = () => {
        return (
            <EditActivity
                name={name}
                time={time}
                location={location}
                notes={notes}
                onEditClick={onEditClick}
            />
        );
    }

    const showActivity = () => {
        return (
            <div>
                <h3>{name}</h3>
                <p>{time}</p>
                <p>{location}</p>
                <p>{notes}</p>
                <button onClick={() => setShow(0)}>Edit</button>
            </div>
        );
    }

    const toggle = () => {
        if (show === 1) {
            return (
                <div>
                    {showActivity()}
                </div>
            )
        }
        if (show === 0) {
            return (
                <div>
                    {showEditForm()}
                </div>
            )
        }
    }

    return (
        <div>
            {toggle()}
        </div>
    );

}

export default Activity;