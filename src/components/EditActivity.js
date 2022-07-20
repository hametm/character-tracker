import React, { useState } from "react";

function EditActivity(props) {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");

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
    }

    return (
        <form action="">
            <legend>Edit Activity</legend>
            <label htmlFor="activityName"></label>
            <input type="text" id="activityName" onChange={handleNameChange} placeholder={props.name} />
            <label htmlFor="time"></label>
            <input type="time" id="time" onChange={handleTimeChange} placeholder={props.time} />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" onChange={handleLocationChange} placeholder={props.location}  />
            <label htmlFor="notes">Notes</label>
            <input type="text" id="notes" onChange={handleNotesChange} placeholder={props.notes} />
            <button id="submit" onClick={buttonClick}>Submit</button>
        </form>
      );
}

export default EditActivity;