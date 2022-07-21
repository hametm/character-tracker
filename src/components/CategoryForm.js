import React, { useState, useEffect } from "react";

function CategoryForm(props) {
    const [category, setCategory] = useState("");

    useEffect(() => {
        checkForErrors();
    });

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    const buttonClick = (e) => {
        e.preventDefault();
        if (!checkForErrors()) props.addCategory(category);
        props.toggle(e);
        document.getElementById("categoryForm").reset();
    }

    const checkForErrors = () => {
        const submitButton = document.querySelector(".categorySubmit");
        let flag = false;
        for (let i = 0; i < props.categoryList.length; i++) {
            if (category === props.categoryList[i]) flag = true;
        }
        if (category === "" || flag) submitButton.disabled = true;
        else submitButton.disabled = false;
    }

    return (
        <form action="" id="categoryForm">
            <label htmlFor="categoryName">New Category</label>
            <input 
                type="text" 
                id="categoryName" 
                onChange={handleChange} 
                placeholder='ex. "Sunday morning"' 
            />
            <input type="submit" className="categorySubmit" id={`${category}Button`} onClick={buttonClick} />
        </form>
      );
}

export default CategoryForm;