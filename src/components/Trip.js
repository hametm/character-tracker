import React, { useState, useEffect } from "react";
import Activity from "./Activity";
import ActivityForm from "./ActivityForm";
import uniqid from "uniqid";

function Trip(props) {

    const [show, setShow] = useState(0); 

    const changeShow = (num) => {
        setShow(num);
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
        if (show === 1) {
            return (
                <ActivityForm 
                    changeShow={changeShow} 
                    tripName={props.name} 
                    addActivity={props.addActivity} 
                    activityList={props.activityList}
                />
            );
        }
    }

    return (
        <div>
            <button id={props.name} onClick={removeCompleteTrip}>X</button>
            <h2>{props.name}</h2>
            <button onClick={() => setShow(1)}>New activity</button>
            {showActivityForm()}
            {showActivities}
        </div>
    );


}

export default Trip;