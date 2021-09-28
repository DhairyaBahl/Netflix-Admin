import React from "react";
import './Movie.css';
import { Link } from "react-router-dom";

class Movie extends React.Component {
    render() {
        return (
            <div className = "movie">
                <div className="movie__title__container">
                    <h1 className="movie__title">Movie</h1>
                    <Link to = "/newMovie">
                        <button className="movie__add__button">Create</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Movie;