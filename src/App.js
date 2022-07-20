import React, { useState } from "react";
import TripForm from "./components/TripForm";
import Trip from "./components/Trip";
import uniqid from "uniqid";

function App() {
    const [tripList, setTripList] = useState([]);

    const addTrip = (trip) => {
        setTripList(tripList.concat(trip));
    }
    
    const showTrips = tripList.map(trip => {
            return (
                <ul key={uniqid()}>
                    <li><Trip name={trip} /></li>
                </ul>
            );
    });

    return (
      <div className="App">
        <h1>Trip Planner</h1>
        <TripForm addTrip={addTrip} />
        {showTrips}
      </div>
    );
}

export default App;
