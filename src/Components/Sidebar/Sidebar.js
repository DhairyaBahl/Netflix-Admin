import React from 'react';
import './Sidebar.css';
import { Home, Timeline, Person, AttachMoney, Movie } from '@material-ui/icons';

class Sidebar extends React.Component {
    render() {
        return (
            <div className = "sidebar">
                <div className = "sidebar__content">
                    <div className = "sidebar__menu">
                        <h3 className = "sidebar__title">Dashboard</h3>
                    </div>
                    <ul className = "sidebar__items">
                        <li className = "sidebar__item active">
                            <Home className = "icon"/> Home
                        </li>
                        <li className = "sidebar__item">
                            <Timeline className = "icon"/> Analytics
                        </li>
                    </ul>
                    <div className = "sidebar__menu">
                        <h3 className = "sidebar__title">Quick Menu</h3>
                    </div>
                    <ul className = "sidebar__items">
                        <li className = "sidebar__item">
                            <Person className = "icon"/> Users
                        </li>
                        <li className = "sidebar__item">
                            <Movie className = "icon"/> Movies
                        </li>
                        <li className = "sidebar__item">
                            <AttachMoney className = "icon"/> Transactions
                        </li>
                    </ul>
                    <div className = "sidebar__menu">
                        <h3 className = "sidebar__title">Dashboard</h3>
                    </div>
                    <ul className = "sidebar__items">
                        <li className = "sidebar__item">
                            <Home className = "icon"/> Home
                        </li>
                        <li className = "sidebar__item">
                            <Timeline className = "icon"/> Analytics
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;