import React, { useState } from "react";

function ActivityForm(props) {
    const [activity, setActivity] = useState("");

    const handleChange = (e) => {
        setActivity(e.target.value);
    }

    const buttonClick = (e) => {
        e.preventDefault();
        props.addActivity(activity);
    }

    return (
        <form action="">
            <legend>New Activity</legend>
            <label htmlFor="trip"></label>
            <input type="text" id="activity" onChange={handleChange} />
            <button id="submit" onClick={buttonClick}>Submit</button>
        </form>
      );
}

export default ActivityForm;