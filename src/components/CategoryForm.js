import React, { useState, useEffect } from "react";

function CategoryForm(props) {
    const [category, setCategory] = useState("");

    useEffect(() => {
        const input = document.getElementById("categoryName");
        input.addEventListener('input', () => {
            for (let i = 0; i < props.categoryList.length; i++) {
                if (input.value === props.categoryList[i]) {
                    input.classList.add("error");
                    input.setCustomValidity("This category already exists!");
                    input.reportValidity();
                } 
                else {
                    input.classList.remove("error");
                    input.setCustomValidity("");
                }
            }
        })
    });

    useEffect(() => {
        checkForErrors();
    });

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    const buttonClick = (e) => {
        e.preventDefault();
        if (!checkForErrors()) props.addCategory(category);
        props.toggle(e.target.id);
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
    
    useEffect(() => {
        const catFormInput = document.getElementById("categoryName");
        const catSubmit = document.querySelector(".categorySubmit");
        catFormInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                catSubmit.click();
            }
        });
    }, []);

    return (
        <form action="" id="categoryForm">
            <label htmlFor="categoryName"><strong>New Category</strong></label>
            <input 
                type="text" 
                id="categoryName" 
                onChange={handleChange} 
                placeholder='ex. "Sunday morning"' 
            />
            <input type="submit" className="categorySubmit submitButton" id={`${category}Button`} onClick={buttonClick} />
        </form>
      );
}

export default CategoryForm;