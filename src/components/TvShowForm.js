import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

function TvShowForm(props) {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("");
    const [description, setDescription] = useState("");
    const [length, setLength] = useState("");

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

    useEffect(() => {
        checkForErrors();
    });

    const createTvShow = () => {
        let newTvShow = {
            name: name,
            platform: platform,
            description: description,
            length: length,
            categoryName: props.categoryName,
            index: uniqid(),
        };
        return newTvShow;
    }

    const buttonClick = (e) => {
        e.preventDefault();
        let newTvShow = createTvShow();
        props.addTvShow(newTvShow);
        props.changeShowForm(0);
    }

    const checkForErrors = () => {
        const submitButton = document.getElementById("tvShowSubmit");
        if (name === "") submitButton.disabled = true;
        else submitButton.disabled = false;
    }

    return (
        <form action="">
            <legend>New TvShow</legend>
            <label htmlFor="tvShowName">Name</label>
            <input type="text" id="tvShowName" onChange={handleNameChange} />
            <label htmlFor="platform">Streaming platform</label>
            <input type="platform" id="platform" onChange={handlePlatformChange} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" onChange={handleDescriptionChange} />
            <label htmlFor="length">Length</label>
            <input type="text" id="length" onChange={handleLengthChange} />
            <input type="submit" id="tvShowSubmit" onClick={buttonClick} />
        </form>
      );
}

export default TvShowForm;