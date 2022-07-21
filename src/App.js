import React, { useState } from "react";
import CategoryForm from "./components/CategoryForm";
import Category from "./components/Category";
import uniqid from "uniqid";
import "./styles/style.css";

function App() {
    const [categoryList, setCategoryList] = useState([]);
    const [tvShowList, setTvShowList] = useState([]);
    const [show, setShow] = useState(0);

    const addCategory = (category) => {
        setCategoryList(categoryList.concat(category));
    }

    const removeCategory = (category) => {
        setCategoryList(categoryList.filter(x => x !== category));
        setShow(0);
    }

    const addTvShow = (tvShow) => {
        setTvShowList(tvShowList.concat(tvShow));
    }

    const removeTvShow = (tvShow) => {
        setTvShowList(tvShowList.filter(x => x !== tvShow));
    }

    const toggle = (e) => {
        setShow(e.target.id);
        // if (show === e.target.id) setShow(0);
        // else if (show === 0) setShow(e.target.id);
    }

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
                    />
                )
            }
        }
        
    }
    
    const showCategories = categoryList.map(category => {
            return (
                <li key={uniqid()}>
                    <button id={`${category}Button`} onClick={toggle}>{category}</button>
                    <button id={category} onClick={() => removeCategory(category)}>X</button>
                </li>
            );
    });

    return (
      <div className="App">
        <header>
            <h1>What to Watch</h1>
        </header>
        <main>
            <div className="sidebar">
                <CategoryForm addCategory={addCategory} categoryList={categoryList} />
                <ul className="categoryContainer" key={uniqid()}>
                    {showCategories}
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