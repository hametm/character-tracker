import React, { useState, useEffect } from "react";

function EditActivity(props) {
    const [name, setName] = useState(props.name);
    const [time, setTime] = useState(props.time);
    const [location, setLocation] = useState(props.location);
    const [notes, setNotes] = useState(props.notes);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    }

    const buttonClick = (e) => {
        e.preventDefault();
        props.onEditClick(name, time, location, notes);
        editActivity();
    }

    useEffect(() => {
        checkForErrors();
    });

    const checkForErrors = () => {
        const submitButton = document.getElementById("activityEdit");
        if (name === "") submitButton.disabled = true;
        else submitButton.disabled = false;
    }

    const editActivity = () => {
        for (let i = 0; i < props.activityList.length; i++) {
            let activity = props.activityList[i];
            if (activity.index === props.index) {
                activity.name = name;
                activity.time = time;
                activity.location = location;
                activity.notes = notes;
            }
        }
    }

    return (
        <form action="">
            <legend>Edit Activity</legend>
            <label htmlFor="activityName"></label>
            <input type="text" id="activityName" onChange={handleNameChange} value={name} />
            <label htmlFor="time"></label>
            <input type="time" id="time" onChange={handleTimeChange} value={time} />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" onChange={handleLocationChange} value={location}  />
            <label htmlFor="notes">Notes</label>
            <input type="text" id="notes" onChange={handleNotesChange} value={notes} />
            <input type ="submit" id="activityEdit" onClick={buttonClick} />
        </form>
      );
}

export default EditActivity;