import React, { useState } from "react";
import EditTvShow from "./EditTvShow";

function TvShow(props) {
    const [show, setShow] = useState(1);
    const [name, setName] = useState(props.name);
    const [genre, setGenre] = useState(props.genre);
    const [platform, setPlatform] = useState(props.platform);
    const [description, setDescription] = useState(props.description);
    const [length, setLength] = useState(props.length);

    const onEditClick = (newName, newGenre, newPlatform, newDescription, newLength) => {
        setName(newName);
        setGenre(newGenre);
        setPlatform(newPlatform);
        setDescription(newDescription);
        setLength(newLength);
        setShow(1);
    }

    const removeCompleteTvShow = (e) => {
        let index = e.target.id;
        for (let i = 0; i < props.tvShowList.length; i++) {
            if (props.tvShowList[i].index === index) {
                props.removeTvShow(props.tvShowList[i]);
            }
        }
    }

    const showEditForm = () => {
        return (
            <EditTvShow
                name={name}
                platform={platform}
                description={description}
                length={length}
                onEditClick={onEditClick}
                categoryName={props.categoryName}
                tvShowList={props.tvShowList}
                index={props.index}
            />
        );
    }

    const showTvShow = () => {
        return (
            <div>
                <button id={props.index} onClick={removeCompleteTvShow}>X</button>
                <h3>{name}</h3>
                <p>{genre}</p>
                <p>{platform}</p>
                <p>{description}</p>
                <p>{length}</p>
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