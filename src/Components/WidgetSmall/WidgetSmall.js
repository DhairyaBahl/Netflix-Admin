import React from 'react';
import './WidgetSmall.css';
import { Visibility } from '@material-ui/icons';

class WidgetSmall extends React.Component {
    render() {
        return (
            <div className = "widget__small">
                <span className="widget__small__title">New Members</span>
                <ul className="widget__small__list">
                    <li className="widget__small__list__item">
                        <img src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="user" className="widget__small__img" />
                        <div className="widget__small__user">
                            <span className="widget__small__userName">GodL Jonathan</span>
                            <span className="widget__small__jobTitle">Software Engineer</span>
                        </div>
                        <button className="widget__small__btn">
                            <Visibility />
                        </button>
                    </li>
                    <li className="widget__small__list__item">
                        <img src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="user" className="widget__small__img" />
                        <div className="widget__small__user">
                            <span className="widget__small__userName">Kaneki Ken</span>
                            <span className="widget__small__jobTitle">Software Engineer</span>
                        </div>
                        <button className="widget__small__btn">
                            <Visibility />
                        </button>
                    </li>
                    <li className="widget__small__list__item">
                        <img src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="user" className="widget__small__img" />
                        <div className="widget__small__user">
                            <span className="widget__small__userName">LMAO DED</span>
                            <span className="widget__small__jobTitle">Software Engineer</span>
                        </div>
                        <button className="widget__small__btn">
                            <Visibility />
                        </button>
                    </li>
                    <li className="widget__small__list__item">
                        <img src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="user" className="widget__small__img" />
                        <div className="widget__small__user">
                            <span className="widget__small__userName">Existence Check</span>
                            <span className="widget__small__jobTitle">Software Engineer</span>
                        </div>
                        <button className="widget__small__btn">
                            <Visibility />
                        </button>
                    </li>
                    <li className="widget__small__list__item">
                        <img src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="user" className="widget__small__img" />
                        <div className="widget__small__user">
                            <span className="widget__small__userName">Serial Killer</span>
                            <span className="widget__small__jobTitle">Software Engineer</span>
                        </div>
                        <button className="widget__small__btn">
                            <Visibility />
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default WidgetSmall;