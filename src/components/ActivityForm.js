import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

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

    useEffect(() => {
        checkForErrors();
    });

    const createActivity = () => {
        let newActivity = {
            name: name,
            time: time,
            location: location,
            notes: notes,
            tripName: props.tripName,
            index: uniqid(),
        };
        props.changeShow(0);
        return newActivity;
    }

    const buttonClick = (e) => {
        e.preventDefault();
        let newActivity = createActivity();
        props.addActivity(newActivity);
         
    }

    const checkForErrors = () => {
        const submitButton = document.getElementById("activitySubmit");
        if (name === "") submitButton.disabled = true;
        else submitButton.disabled = false;
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
            <input type="submit" id="activitySubmit" onClick={buttonClick} />
        </form>
      );
}

export default ActivityForm;