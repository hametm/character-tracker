import React, { useState } from "react";

function ActivityForm(props) {
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
        props.addActivity(name, time, location, notes);
    }

    return (
        <form action="">
            <legend>New Activity</legend>
            <label htmlFor="activityName"></label>
            <input type="text" id="activityName" onChange={handleNameChange} />
            <label htmlFor="time"></label>
            <input type="time" id="time" onChange={handleTimeChange} />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" onChange={handleLocationChange} />
            <label htmlFor="notes">Notes</label>
            <input type="text" id="notes" onChange={handleNotesChange} />
            <button id="submit" onClick={buttonClick}>Submit</button>
        </form>
      );
}

export default ActivityForm;