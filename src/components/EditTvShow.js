import React, { useState, useEffect } from "react";

function EditTvShow(props) {
    const [name, setName] = useState(props.name);
    const [genre, setGenre] = useState(props.genre);
    const [platform, setPlatform] = useState(props.platform);
    const [description, setDescription] = useState(props.description);
    const [length, setLength] = useState(props.length);

    useEffect(() => {
        checkForErrors();
    });

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handlePlatformChange = (e) => {
        setPlatform(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleLengthChange = (e) => {
        setLength(e.target.value);
    }

    const submitButtonClick = (e) => {
        e.preventDefault();
        props.onEditClick(name, genre, platform, description, length);
        editTvShow();
        props.changeShow();
    }

    const closeButtonClick = () => {
        props.changeShow();
    }

    const checkForErrors = () => {
        const submitButton = document.getElementById("tvShowEdit");
        if (name === "") submitButton.disabled = true;
        else submitButton.disabled = false;
    }

    const editTvShow = () => {
        for (let i = 0; i < props.tvShowList.length; i++) {
            let tvShow = props.tvShowList[i];
            if (tvShow.index === props.index) {
                tvShow.name = name;
                tvShow.genre = genre;
                tvShow.platform = platform;
                tvShow.description = description;
                tvShow.length = length;
            }
        }
    }

    useEffect(() => {
        const editShowInputs = document.querySelectorAll(".editShowInput");
        const editShowSubmit = document.getElementById("tvShowEdit");
        editShowInputs.forEach(input => {
            input.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    editShowSubmit.click();
                }
            });
        });
    }, [])

    return (
            <form action="" className="tvShowForm popup">
                <div className="formHeader">
                    <legend>Edit Show</legend>
                    <div className="closeButtonContainer">
                        <button className="popupCloseButton" onClick={closeButtonClick}>X</button>
                    </div>
                </div>
                <div className="formSection">
                    <label htmlFor="tvShowName">Name</label>
                    <input className="editShowInput" type="text" id="tvShowName" onChange={handleNameChange} value={name} />
                </div>
                <div className="formSection">
                    <label htmlFor="genre">Genre</label>
                    <input className="editShowInput" type="text" id="genre" onChange={handleGenreChange} value={genre} />
                </div>
                <div className="formSection">
                    <label htmlFor="platform">Streaming platform</label>
                    <input className="editShowInput" type="text" id="platform" onChange={handlePlatformChange} value={platform} />
                </div>
                <div className="formSection">
                    <label htmlFor="description">Description</label>
                    <input className="editShowInput" type="text" id="description" onChange={handleDescriptionChange} value={description}  />
                </div>
                <div className="formSection">
                    <label htmlFor="length">Length</label>
                    <input type="text" id="length" onChange={handleLengthChange} value={length} />
                </div>
                <input type ="submit" className="submitButton" id="tvShowEdit" onClick={submitButtonClick} />
            </form>
      );
}

export default EditTvShow;