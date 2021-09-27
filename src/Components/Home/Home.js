import React from 'react';
import './Home.css'
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo'
import Chart from '../Chart/Chart'
import WidgetLarge from '../WidgetLarge/WidgetLarge';
import WidgetSmall from '../WidgetSmall/WidgetSmall';

class Home extends React.Component {
    render () {

        const data = [
            {
              name: 'Jan',
              "Active User": 4000,
            },
            {
              name: 'Feb',
              "Active User": 3000,
            },
            {
              name: 'Mar',
              "Active User": 2000,
            },
            {
              name: 'Apr',
              "Active User": 2780,
            },
            {
              name: 'May',
              "Active User": 1890,
            },
            {
              name: 'June',
              "Active User": 2390,
            },
            {
              name: 'July',
              "Active User": 3490,
            },
            {
                name: 'Aug',
                "Active User": 4000,
              },
              {
                name: 'Sep',
                "Active User": 3000,
              },
              {
                name: 'Oct',
                "Active User": 2000,
              },
              {
                name: 'Nov',
                "Active User": 2780,
              },
              {
                name: 'Dec',
                "Active User": 1890,
              },
          ];

        return (
            <div className = "home">
                <FeaturedInfo />
                <Chart data={data} title = "User Analytics" dataKey="Active User"/>
                <div className="home__widgets">
                    <WidgetSmall/>
                    <WidgetLarge/>
                </div>
            </div>
        )
    }
}

export default Home;