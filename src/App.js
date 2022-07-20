import React, { useState } from "react";
import TripForm from "./components/TripForm";
import Trip from "./components/Trip";
import uniqid from "uniqid";

function App() {
    const [tripList, setTripList] = useState([]);
    const [activityList, setActivityList] = useState([]);

    const addTrip = (trip) => {
        setTripList(tripList.concat(trip));
    }

    const removeTrip = (trip) => {
        setTripList(tripList.filter(x => x !== trip))
    }

    const addActivity = (activity) => {
        setActivityList(activityList.concat(activity));
    }

    const removeActivity = (activity) => {
        setActivityList(activityList.filter(x => x !== activity))
    }
    
    const showTrips = tripList.map(trip => {

            return (
                <ul key={uniqid()}>
                    <li>
                        <Trip 
                            name={trip} 
                            activityList={activityList}
                            addActivity={addActivity}
                            removeActivity={removeActivity}
                            removeTrip={removeTrip}
                            tripList={tripList}
                          />
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
