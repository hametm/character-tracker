import React, { useState, useEffect } from "react";

function CategoryForm(props) {
    const [category, setCategory] = useState("");

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    const buttonClick = (e) => {
        e.preventDefault();
        if (!checkForErrors()) props.addCategory(category);
        document.getElementById("categoryForm").reset();
    }

    useEffect(() => {
        checkForErrors();
    });

    const checkForErrors = () => {
        const submitButton = document.getElementById("categorySubmit");
        let flag = false;
        for (let i = 0; i < props.categoryList.length; i++) {
            if (category === props.categoryList[i]) flag = true;
        }
        if (category === "" || flag) submitButton.disabled = true;
        else submitButton.disabled = false;
    }

    return (
        <form action="" id="categoryForm">
            <legend>New Category</legend>
            <label htmlFor="categoryName"></label>
            <input type="text" id="categoryName" onChange={handleChange} />
            <input type="submit" id="categorySubmit" onClick={buttonClick} />
        </form>
      );
}

export default CategoryForm;