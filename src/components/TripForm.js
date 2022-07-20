import React, { useState, useEffect } from "react";

function TripForm(props) {
    const [trip, setTrip] = useState("");

    const handleChange = (e) => {
        setTrip(e.target.value);
    }

    const buttonClick = (e) => {
        e.preventDefault();
        if (!checkForErrors()) props.addTrip(trip);
        document.getElementById("tripForm").reset();
    }

    useEffect(() => {
        checkForErrors();
    });

    const checkForErrors = () => {
        const submitButton = document.getElementById("tripSubmit");
        let flag = false;
        for (let i = 0; i < props.tripList.length; i++) {
            if (trip === props.tripList[i]) flag = true;
        }
        if (trip === "" || flag) submitButton.disabled = true;
        else submitButton.disabled = false;
    }

    return (
        <form action="" id="tripForm">
            <legend>New Trip</legend>
            <label htmlFor="tripName"></label>
            <input type="text" id="tripName" onChange={handleChange} />
            <input type="submit" id="tripSubmit" onClick={buttonClick} />
        </form>
      );
}

export default TripForm;