import React, { useState } from "react";

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
            <button id="submit" onClick={buttonClick}>Submit</button>
        </form>
      );
}

export default EditActivity;