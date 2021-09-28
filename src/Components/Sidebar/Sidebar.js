import React from 'react';
import './Sidebar.css';
import { Home, Person, AttachMoney, Movie, People } from '@material-ui/icons';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.itemClicked = this.itemClicked.bind(this);
    }

    itemClicked(event) {

        const sidebarItems = document.querySelectorAll(".sidebar__item")
        console.log(sidebarItems);

        for(const item of sidebarItems) {
            item.classList.remove("active");
        }

        event.target.classList.add("active");

    }

    render() {
        return (
            <div className = "sidebar">
                <div className = "sidebar__content">
                    <div className = "sidebar__menu">
                        <h3 className = "sidebar__title">Dashboard</h3>
                    </div>
                    <ul className = "sidebar__items">
                        <Link to = "/" className = "link">
                            <li className = "sidebar__item active" onClick = {event=>this.itemClicked(event)}>
                                <Home className = "icon"/> Home
                            </li>
                        </Link>
                    </ul>
                    <div className = "sidebar__menu">
                        <h3 className = "sidebar__title">Quick Menu</h3>
                    </div>
                    <ul className = "sidebar__items">
                        <Link to = "/users" className = "link">
                            <li className = "sidebar__item" onClick = {event=>this.itemClicked(event)}>
                                <People className = "icon"/> Users
                            </li>
                        </Link>
                        <Link to="/movies" className = "link">
                            <li className = "sidebar__item" onClick = {event=>this.itemClicked(event)}>
                                <Movie className = "icon"/> Movies
                            </li>
                        </Link>
                        <li className = "sidebar__item" onClick = {event=>this.itemClicked(event)}>
                            <AttachMoney className = "icon"/> Transactions
                        </li>
                    </ul>
                    <div className = "sidebar__menu">
                        <h3 className = "sidebar__title">New</h3>
                    </div>
                    <ul className = "sidebar__items">
                        <Link to = "/newUser" className = "link">
                            <li className = "sidebar__item" onClick = {event=>this.itemClicked(event)}>
                                <Person className = "icon"/> User
                            </li>
                        </Link>
                        <Link to = "/newMovie" className = "link">
                            <li className = "sidebar__item" onClick = {event=>this.itemClicked(event)}>
                                <Movie className = "icon"/> Movie
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;