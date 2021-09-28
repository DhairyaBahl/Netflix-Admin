import React from "react";
import './NewMovie.css';

class NewMovie extends React.Component {
    render() {
        return (
            <div className = "new__movie">
                <h1 className="new__user__title">New Movie</h1>
                <form className="new__user__form">
                    <div className="new__user__item">
                        <label htmlFor="">name</label>
                        <input type="text" placeholder="John" />
                    </div>
                    <div className="new__user__item">
                        <label htmlFor="">Banner Image Url</label>
                        <input type="text" placeholder="https://abc.com" />
                    </div>
                    <div className="new__user__item">
                        <label htmlFor="">Trailer Url</label>
                        <input type="text" placeholder="https://abc.com" />
                    </div>
                    <div className="new__user__item">
                        <label htmlFor="">Poster Image Url</label>
                        <input type="text" placeholder="https://abc.com" />
                    </div>
                    <div className="new__user__item">
                        <label htmlFor="">Genre</label>
                        <input type="text" placeholder="Action" />
                    </div>
                    <div className="new__user__item">
                        <label htmlFor="">Category</label>
                        <input type="text" placeholder="Trending" />
                    </div>
                    <div className = "submit__btn__div">
                        <button className = "new__user__btn">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewMovie;