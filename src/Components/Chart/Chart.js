import React from 'react';
import './Chart.css';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

class Chart extends React.Component {

    render() {

        return (
            <div className="chart">
                <h3 className="chart__title">{this.props.title}</h3>
                <ResponsiveContainer width="100%" aspect={4/1}>
                    <AreaChart data={this.props.data}>
                        <XAxis dataKey="name" stroke="#141414f5" />
                        <Area type="monotone" stroke="#e50914" fill = "#e50914" dataKey={this.props.dataKey} strokeWidth={2}/>
                        <Tooltip isAnimationActive={false}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default Chart;