import React, { useState, useEffect } from "react";
import Activity from "./Activity";
import ActivityForm from "./ActivityForm";
import EditActivity from "./EditActivity";
import uniqid from "uniqid";

function Trip(props) {

    const [activityList, setActivityList] = useState([]);
    const [show, setShow] = useState(0);

    const addActivity = (name, time, location, notes) => {
        let newActivity = {
            name: name,
            time: time,
            location: location,
            notes: notes,
        };
        setActivityList(activityList.concat(newActivity));
        setShow(0);
    }

    const showActivities = activityList.map(activity => {
        return (
            <ul key={uniqid()}>
                <li>
                    <Activity 
                        name={activity.name} 
                        time={activity.time} 
                        location = {activity.location}
                        notes = {activity.notes}
                    />
                </li>
            </ul>
        );
    });

    const showActivityForm = () => {
        if (show === 1) {
            return (
                <ActivityForm addActivity={addActivity} />
            );
        }
        if (show === 0) {
            return;
        }
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <button onClick={() => setShow(1)}>New activity</button>
            {showActivityForm()}
            {showActivities}
        </div>
    );


}

export default Trip;