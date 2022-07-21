import React, { useState } from "react";
import EditTvShow from "./EditTvShow";

function TvShow(props) {
    const [show, setShow] = useState(1);
    const [name, setName] = useState(props.name);
    const [time, setTime] = useState(props.time);
    const [location, setLocation] = useState(props.location);
    const [notes, setNotes] = useState(props.notes);

    const onEditClick = (newName, newTime, newLocation, newNotes) => {
        setName(newName);
        setTime(newTime);
        setLocation(newLocation);
        setNotes(newNotes);
        setShow(1);
    }

    const removeCompleteTvShow = (e) => {
        let index = e.target.id;
        for (let i = 0; i < props.tvshowList.length; i++) {
            if (props.tvshowList[i].index === index) {
                props.removeTvShow(props.tvshowList[i]);
            }
        }
    }

    const showEditForm = () => {
        return (
            <EditTvShow
                name={name}
                time={time}
                location={location}
                notes={notes}
                onEditClick={onEditClick}
                categoryName={props.categoryName}
                tvshowList={props.tvshowList}
                index={props.index}
            />
        );
    }

    const showTvShow = () => {
        return (
            <div>
                <button id={props.index} onClick={removeCompleteTvShow}>X</button>
                <h3>{name}</h3>
                <p>{time}</p>
                <p>{location}</p>
                <p>{notes}</p>
                <button onClick={() => setShow(0)}>Edit</button>
            </div>
        );
    }

    const toggle = () => {
        if (show === 1) {
            return (
                <div>
                    {showTvShow()}
                </div>
            )
        }
        if (show === 0) {
            return (
                <div>
                    {showEditForm()}
                </div>
            )
        }
    }

    return (
        <div>
            {toggle()}
        </div>
    );

}

export default TvShow;