import React from 'react';
import './Header.css';
import Logo from '../../assets/Logo.png'
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import ProfilePic from '../../assets/ProfilePic.png'

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="header__content">
                    <div className="header__left">
                        <img className = "header__logo" src={Logo} alt="Netflix" />
                    </div>
                    <div className="header__right">
                        <div className = "bell__iconContainer icon__div">
                            <NotificationsNone/>
                            <span className = "notification__count">4</span>
                        </div>
                        <div className = "header__language icon__div">
                            <LanguageIcon />
                        </div>
                        <div className="header__settings icon__div">
                            <SettingsIcon />
                        </div>
                        <div className = "icon__div picture__div">
                            <img className = "profile__pic" src = {ProfilePic} alt = "profile pic" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;