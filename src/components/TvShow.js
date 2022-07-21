import React, { useState } from "react";
import EditTvShow from "./EditTvShow";

function TvShow(props) {
    const [showShow, setShowShow] = useState(1); // ¯\_(ツ)_/¯
    const [showDetails, setShowDetails] = useState(0);
    const [name, setName] = useState(props.name);
    const [genre, setGenre] = useState(props.genre);
    const [platform, setPlatform] = useState(props.platform);
    const [description, setDescription] = useState(props.description);
    const [length, setLength] = useState(props.length);

    const showEditForm = () => {
        return (
            <EditTvShow
                name={name}
                genre={genre}
                platform={platform}
                description={description}
                length={length}
                onEditClick={onEditClick}
                categoryName={props.categoryName}
                tvShowList={props.tvShowList}
                index={props.index}
                changeShow={changeShowShow}
            />
        );
    }

    const showTvShow = () => {
        return (
            <li className="tvShow">
                <div className="tvShowCard">
                    <h3>{name}</h3>
                    <div className="tvShowButtonContainer">
                        <button onClick={() => toggleDetails(props.index)}>Expand</button>
                        <button onClick={() => setShowShow(0)}>Edit</button>
                        <button id={props.index} onClick={removeTvShow}>X</button>
                    </div>
                </div>
                {showTvShowDetails(props.index)}
            </li>
        );
    }

    const showTvShowDetails = (index) => {
        if (showDetails === index) {
            return (
                <div>
                    <p>{genre}</p>
                    <p>{platform}</p>
                    <p>{description}</p>
                    <p>{length}</p>
                </div>
            )
        }
    }

    const onEditClick = (newName, newGenre, newPlatform, newDescription, newLength) => {
        setName(newName);
        setGenre(newGenre);
        setPlatform(newPlatform);
        setDescription(newDescription);
        setLength(newLength);
    }

    const changeShowShow = () => {
        setShowShow(1);
    }

    const removeTvShow = (e) => {
        let index = e.target.id;
        for (let i = 0; i < props.tvShowList.length; i++) {
            if (props.tvShowList[i].index === index) {
                props.removeTvShow(props.tvShowList[i]);
            }
        }
    }

    const toggleShow = () => {
        if (showShow === 1) return showTvShow()
        if (showShow === 0) return showEditForm()
    }

    const toggleDetails = (index) => {
        if (showDetails === index) setShowDetails(0);
        if (showDetails === 0) setShowDetails(index);
    }

    return (
            <ul className="tvShowContainer">{toggleShow()}</ul>
    );

}

export default TvShow;