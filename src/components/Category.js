import React, { useState, useEffect } from "react";
import TvShow from "./TvShow";
import TvShowForm from "./TvShowForm";
import uniqid from "uniqid";

function Category(props) {

    const [showForm, setShowForm] = useState(0); 

    const changeShowForm = (num) => {
        setShowForm(num);
    }    

    const showActivities = props.tvShowList.map(tvShow => {
        if (tvShow.categoryName === props.name) {
            return (
                <ul key={uniqid()}>
                    <li>
                        <TvShow 
                            name={tvShow.name} 
                            genre={tvShow.genre} 
                            platform={tvShow.platform} 
                            description = {tvShow.description}
                            length = {tvShow.length}
                            categoryName={tvShow.categoryName}
                            tvShowList={props.tvShowList}
                            index={tvShow.index}
                            removeTvShow={props.removeTvShow}
                        />
                    </li>
                </ul>
            );
        }
        
    });

    const showTvShowForm = () => {
        if (showForm === 1) {
            return (
                <TvShowForm 
                    changeShowForm={changeShowForm} 
                    categoryName={props.name} 
                    addTvShow={props.addTvShow} 
                    tvShowList={props.tvShowList}
                />
            );
        }
    }

    const toggleForm = () => {
        if (showForm === 1) setShowForm(0);
        else if (showForm === 0) setShowForm(1);
    }

    return (
        <div>
            <div>
                <button onClick={toggleForm}>Add show</button>
                {showTvShowForm()}
                {showActivities}
            </div>
        </div>
    );
}

export default Category;