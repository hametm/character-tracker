import React, { useState } from "react";

function TripForm(props) {
    const [trip, setTrip] = useState("");

    const handleChange = (e) => {
        setTrip(e.target.value);
    }

    const buttonClick = (e) => {
        e.preventDefault();
        props.addTrip(trip);
    }

    return (
        <form action="">
            <legend>New Trip</legend>
            <label htmlFor="trip"></label>
            <input type="text" id="trip" onChange={handleChange} />
            <button id="submit" onClick={buttonClick}>Submit</button>
        </form>
      );
}

export default TripForm;