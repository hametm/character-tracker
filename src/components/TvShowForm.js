import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

function TvShowForm(props) {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("");
    const [description, setDescription] = useState("");
    const [length, setLength] = useState("");

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

    const createTvShow = () => {
        let newTvShow = {
            name: name,
            genre: genre,
            platform: platform,
            description: description,
            length: length,
            categoryName: props.categoryName,
            index: uniqid(),
        };
        return newTvShow;
    }

    const submitButtonClick = (e) => {
        e.preventDefault();
        let newTvShow = createTvShow();
        props.addTvShow(newTvShow);
        props.toggle(`${props.categoryName}Button`);
        props.changeShowForm(0);
    }

    const closeButtonClick = () => {
        props.changeShowForm(0);
    }

    const checkForErrors = () => {
        const submitButton = document.getElementById("tvShowSubmit");
        if (name === "") submitButton.disabled = true;
        else submitButton.disabled = false;
    }

    useEffect(() => {
        const tvShowInputs = document.querySelectorAll(".tvShowInput");
        const tvShowSubmit = document.getElementById("tvShowSubmit");
        tvShowInputs.forEach(input => {
            input.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    tvShowSubmit.click();
                }
            });
        });
    }, []);

    return (
        <form action="" className="tvShowForm popup">
            <div className="formHeader">
                <legend>New Show</legend>
                <div className="closeButtonContainer">
                    <button onClick={closeButtonClick}>X</button>
                </div>
            </div>
            <div className="formSection">
                <label htmlFor="tvShowName">Name*</label>
                <input className="tvShowInput" type="text" id="tvShowName" onChange={handleNameChange} />
            </div>
            <div className="formSection">
                <label htmlFor="genre">Genre</label>
                <input className="tvShowInput" type="text" id="genre" onChange={handleGenreChange} />
            </div>
            <div className="formSection">
                <label htmlFor="platform">Streaming platform</label>
                <input className="tvShowInput" type="text" id="platform" onChange={handlePlatformChange} />
            </div>
            <div className="formSection">
                <label htmlFor="description">Description</label>
                <input className="tvShowInput" type="text" id="description" onChange={handleDescriptionChange} />
            </div>
            <div className="formSection">
                <label htmlFor="length">Length</label>
                <input className="tvShowInput" type="text" id="length" onChange={handleLengthChange} />
            </div>
            <input type="submit" className="submitButton" id="tvShowSubmit" onClick={submitButtonClick} />
        </form>
      );
}

export default TvShowForm;