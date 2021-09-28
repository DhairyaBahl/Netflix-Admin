import './User.css';
import React from 'react';
import { CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Public, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

class User extends React.Component {
    render() {
        return (
            <div className = "user">
                <div className="user__title__container">
                    <h1 className="user__title">Edit User</h1>
                    <Link to="/newUser">
                        <button className="user__add__btn">Create</button>
                    </Link>
                </div>
                <div className="user__container">
                    <div className="user__show">
                        <div className="user__show__top">
                            <img src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="user" className="user__show__img" />
                            <div className="user__show__top__title">
                                <span className="user__show__username">GodL Jonathan</span>
                                <span className="user__show__jobTitle">Top Fragger</span>
                            </div>
                        </div>
                        <div className="user__show__bottom">
                            <span className="user__show__title">Account Details</span>
                            <div className="user__show__info">
                                <PermIdentity className = "user__show__icon"/>
                                <span className="user__show__infoTitle">JonathanX</span>
                            </div>
                            <div className="user__show__info">
                                <CalendarToday className = "user__show__icon"/>
                                <span className="user__show__infoTitle">29.05.2002</span>
                            </div>
                            <span className="user__show__title">Contact Details</span>
                            <div className="user__show__info">
                                <PhoneAndroid className = "user__show__icon"/>
                                <span className="user__show__infoTitle">+91 9900909012</span>
                            </div>
                            <div className="user__show__info">
                                <MailOutline className = "user__show__icon"/>
                                <span className="user__show__infoTitle">jonathan@gmail.com</span>
                            </div>
                            <div className="user__show__info">
                                <Public className = "user__show__icon"/>
                                <span className="user__show__infoTitle">Delhi, India</span>
                            </div>
                        </div>
                    </div>
                    <div className="user__update">
                        <span className="user__update__title">Edit</span>
                        <form className="user__update__form">
                            <div className="user__update__left">
                                <div className="user__update__item">
                                    <label>Username</label>
                                    <input type="text" placeholder="JonathanX" className="user__update__input" />
                                </div>
                                <div className="user__update__item">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="GodL Jonathan" className="user__update__input" />
                                </div>
                                <div className="user__update__item">
                                    <label>Email</label>
                                    <input type="text" placeholder="jonathan@gmail.com" className="user__update__input" />
                                </div>
                                <div className="user__update__item">
                                    <label>Phone</label>
                                    <input type="text" placeholder="+91 9900909012" className="user__update__input" />
                                </div>
                                <div className="user__update__item">
                                    <label>Address</label>
                                    <input type="text" placeholder="Delhi, India" className="user__update__input" />
                                </div>
                            </div>
                            <div className="user__update__right">
                                <div className="user__update__upload">
                                    <img src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="user" className="user__update__img" />
                                    <label htmlFor="file"><Publish className = "user__update__icon"/></label>
                                    <input type="file" id = "file" style = {{"display":"none"}} />
                                </div>
                                <button className="user__update__btn">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;