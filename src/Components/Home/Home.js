import React from 'react';
import './Home.css'
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo'

class Home extends React.Component {
    render () {
        return (
            <div className = "home">
                <FeaturedInfo />
            </div>
        )
    }
}

export default Home;