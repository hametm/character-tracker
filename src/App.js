import React, { useState } from "react";
import TripForm from "./components/TripForm";
import Trip from "./components/Trip";
import uniqid from "uniqid";

function App() {
    const [tripList, setTripList] = useState([]);
    const [activityList, setActivityList] = useState([]);
    const [show, setShow] = useState(0);

    const addTrip = (trip) => {
        setTripList(tripList.concat(trip));
    }

    const removeTrip = (trip) => {
        setTripList(tripList.filter(x => x !== trip));
        setShow(0);
    }

    const addActivity = (activity) => {
        setActivityList(activityList.concat(activity));
    }

    const removeActivity = (activity) => {
        setActivityList(activityList.filter(x => x !== activity));
    }

    const toggle = (e) => {
        if (show === e.target.id) setShow(0);
        else if (show === 0) setShow(e.target.id);
    }

    const showTrip = (trip) => {
        if (show === `${trip}Button`) {
            return (
                <Trip 
                    name={trip} 
                    activityList={activityList}
                    addActivity={addActivity}
                    removeActivity={removeActivity}
                    removeTrip={removeTrip}
                    tripList={tripList}
                />
            )
        }
    }
    
    const showTrips = tripList.map(trip => {
            return (
                <ul key={uniqid()}>
                    <li>
                        <button id={`${trip}Button`} onClick={toggle}>{trip}</button>
                        {showTrip(trip)}
                      </li>
                </ul>
            );
    });

    return (
      <div className="App">
        <h1>Trip Planner</h1>
        <TripForm addTrip={addTrip} tripList={tripList} />
        {showTrips}
      </div>
    );
}

export default App;
