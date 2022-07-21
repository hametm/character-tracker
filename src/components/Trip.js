import React, { useState, useEffect } from "react";
import Activity from "./Activity";
import ActivityForm from "./ActivityForm";
import uniqid from "uniqid";

function Trip(props) {

    const [showForm, setShowForm] = useState(0); 

    const changeShowForm = (num) => {
        setShowForm(num);
    }    

    const removeCompleteTrip = (e) => {
        let name = e.target.id;
        for (let i = 0; i < props.tripList.length; i++) {
            if (props.tripList[i] === name) {
                props.removeTrip(props.tripList[i]);
            }
        }
    }

    const showActivities = props.activityList.map(activity => {
        if (activity.tripName === props.name) {
            return (
                <ul key={uniqid()}>
                    <li>
                        <Activity 
                            name={activity.name} 
                            time={activity.time} 
                            location = {activity.location}
                            notes = {activity.notes}
                            tripName={activity.tripName}
                            activityList={props.activityList}
                            index={activity.index}
                            removeActivity={props.removeActivity}
                        />
                    </li>
                </ul>
            );
        }
        
    });

    const showActivityForm = () => {
        if (showForm === 1) {
            return (
                <ActivityForm 
                    changeShowForm={changeShowForm} 
                    tripName={props.name} 
                    addActivity={props.addActivity} 
                    activityList={props.activityList}
                />
            );
        }
    }

    const toggleForm = () => {
        if (showForm === 1) setShowForm(0);
        else if (showForm === 0) setShowForm(1);
    }

    return (
        <div>
            <button id={props.name} onClick={removeCompleteTrip}>X</button>
            <h2>{props.name}</h2>
            <div>
                <button onClick={toggleForm}>New activity</button>
                {showActivityForm()}
                {showActivities}
            </div>
        </div>
    );
}

export default Trip;