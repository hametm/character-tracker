import React, { useState } from "react";
import Activity from "./Activity";
import ActivityForm from "./ActivityForm";
import uniqid from "uniqid";

function Trip(props) {

const [activityList, setActivityList] = useState([]);

    const addActivity = (name, time, location, notes) => {
        let newActivity = {
            name: name,
            time: time,
            location: location,
            notes: notes,
        };
        setActivityList(activityList.concat(newActivity));
        console.log(activityList);
    }

    const displayActivities = activityList.map(activity => {
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

    return (
        <div>
            <h2>{props.name}</h2>
            <ActivityForm addActivity={addActivity} />
            {displayActivities}
        </div>
    );


}

export default Trip;