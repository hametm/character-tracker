import React, { useState, useEffect } from "react";

function EditTvShow(props) {
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
        editTvShow();
    }

    useEffect(() => {
        checkForErrors();
    });

    const checkForErrors = () => {
        const submitButton = document.getElementById("tvshowEdit");
        if (name === "") submitButton.disabled = true;
        else submitButton.disabled = false;
    }

    const editTvShow = () => {
        for (let i = 0; i < props.tvshowList.length; i++) {
            let tvshow = props.tvshowList[i];
            if (tvshow.index === props.index) {
                tvshow.name = name;
                tvshow.time = time;
                tvshow.location = location;
                tvshow.notes = notes;
            }
        }
    }

    return (
        <form action="">
            <legend>Edit TvShow</legend>
            <label htmlFor="tvshowName"></label>
            <input type="text" id="tvshowName" onChange={handleNameChange} value={name} />
            <label htmlFor="time"></label>
            <input type="time" id="time" onChange={handleTimeChange} value={time} />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" onChange={handleLocationChange} value={location}  />
            <label htmlFor="notes">Notes</label>
            <input type="text" id="notes" onChange={handleNotesChange} value={notes} />
            <input type ="submit" id="tvshowEdit" onClick={buttonClick} />
        </form>
      );
}

export default EditTvShow;