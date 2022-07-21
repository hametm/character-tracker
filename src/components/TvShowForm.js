import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

function TvShowForm(props) {
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

    const createTvShow = () => {
        let newTvShow = {
            name: name,
            time: time,
            location: location,
            notes: notes,
            categoryName: props.categoryName,
            index: uniqid(),
        };
        return newTvShow;
    }

    const buttonClick = (e) => {
        e.preventDefault();
        let newTvShow = createTvShow();
        props.addTvShow(newTvShow);
        props.changeShowForm(0);
    }

    const checkForErrors = () => {
        const submitButton = document.getElementById("tvshowSubmit");
        if (name === "") submitButton.disabled = true;
        else submitButton.disabled = false;
    }

    return (
        <form action="">
            <legend>New TvShow</legend>
            <label htmlFor="tvshowName"></label>
            <input type="text" id="tvshowName" onChange={handleNameChange} />
            <label htmlFor="time"></label>
            <input type="time" id="time" onChange={handleTimeChange} />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" onChange={handleLocationChange} />
            <label htmlFor="notes">Notes</label>
            <input type="text" id="notes" onChange={handleNotesChange} />
            <input type="submit" id="tvshowSubmit" onClick={buttonClick} />
        </form>
      );
}

export default TvShowForm;