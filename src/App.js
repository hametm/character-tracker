import React, { useState } from "react";
import CategoryForm from "./components/CategoryForm";
import Category from "./components/Category";
import uniqid from "uniqid";
import "./styles/style.css";
import { useEffect } from "react";

function App() {
    const [categoryList, setCategoryList] = useState([]);
    const [tvShowList, setTvShowList] = useState([]);
    const [show, setShow] = useState(0);
    const [highlightedCat, setHighlightedCat] = useState("");

    useEffect(() => {
        const highlighted = document.getElementById(`${[highlightedCat]}Category`);
        if (highlighted) {
            const categories = document.querySelectorAll(".category");
            categories.forEach(category => {
                if(category.classList.contains("selected")) category.classList.remove("selected");
            });
            highlighted.classList.add("selected");
        } 
    });

    const addCategory = (category) => {
        setCategoryList(categoryList.concat(category));
    }

    const removeCategory = (category) => {
        setCategoryList(categoryList.filter(x => x !== category));
        setShow(0); // Needs something special
    }

    const addTvShow = (tvShow) => {
        setTvShowList(tvShowList.concat(tvShow));
    }

    const removeTvShow = (tvShow) => {
        setTvShowList(tvShowList.filter(x => x !== tvShow));
    }

    const toggle = (e) => {
        setShow(e);
        highlightCategory(e);
        // if (show === e.target.id) setShow(0);
        // else if (show === 0) setShow(e.target.id);
    }

        
    const showCategoryList = categoryList.map(category => {
        return (
            <li id={`${category}Category`} className="category" key={uniqid()}>
                <button className="catButton" id={`${category}Button`} onClick={() => toggle(`${category}Button`)}>{category}</button>
                <div className="catCloseButtonContainer">
                    <button className="catCloseButton" id={category} onClick={() => removeCategory(category)}>X</button>
                </div>
            </li>
        );
    });

    const showCategory = () => {
        for (let i = 0; i < categoryList.length; i++) {
            if (show === `${categoryList[i]}Button`) {
                return (
                    <Category 
                        name={categoryList[i]} 
                        tvShowList={tvShowList}
                        addTvShow={addTvShow}
                        removeTvShow={removeTvShow}
                        removeCategory={removeCategory}
                        categoryList={categoryList}
                        toggle={toggle}
                    />
                )
            }
        }
    }

    const highlightCategory = (id) => {
        let arr = id.split("");
        arr.splice(-6, 6).join("");
        let category = arr.join("");
        setHighlightedCat(category);
    }

    return (
      <div className="App">
        <header>
            <h1>What to Watch</h1>
        </header>
        <main>
            <div className="sidebar">
                <CategoryForm addCategory={addCategory} categoryList={categoryList} toggle={toggle} />
                <ul className="catContainer" key={uniqid()}>
                    {showCategoryList}
                </ul>
            </div>
            <div className="display">
                {showCategory()}
            </div>
        </main>
        <footer>Made by Morgan</footer>
      </div>
    );
}

export default App;