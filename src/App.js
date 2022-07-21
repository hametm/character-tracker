import React, { useState } from "react";
import CategoryForm from "./components/CategoryForm";
import Category from "./components/Category";
import uniqid from "uniqid";

function App() {
    const [categoryList, setCategoryList] = useState([]);
    const [tvshowList, setTvShowList] = useState([]);
    const [show, setShow] = useState(0);

    const addCategory = (category) => {
        setCategoryList(categoryList.concat(category));
    }

    const removeCategory = (category) => {
        setCategoryList(categoryList.filter(x => x !== category));
        setShow(0);
    }

    const addTvShow = (tvshow) => {
        setTvShowList(tvshowList.concat(tvshow));
    }

    const removeTvShow = (tvshow) => {
        setTvShowList(tvshowList.filter(x => x !== tvshow));
    }

    const toggle = (e) => {
        if (show === e.target.id) setShow(0);
        else if (show === 0) setShow(e.target.id);
    }

    const showCategory = (category) => {
        if (show === `${category}Button`) {
            return (
                <Category 
                    name={category} 
                    tvshowList={tvshowList}
                    addTvShow={addTvShow}
                    removeTvShow={removeTvShow}
                    removeCategory={removeCategory}
                    categoryList={categoryList}
                />
            )
        }
    }
    
    const showCategorys = categoryList.map(category => {
            return (
                <ul key={uniqid()}>
                    <li>
                        <button id={`${category}Button`} onClick={toggle}>{category}</button>
                        {showCategory(category)}
                      </li>
                </ul>
            );
    });

    return (
      <div className="App">
        <h1>What to Watch</h1>
        <CategoryForm addCategory={addCategory} categoryList={categoryList} />
        {showCategorys}
      </div>
    );
}

export default App;