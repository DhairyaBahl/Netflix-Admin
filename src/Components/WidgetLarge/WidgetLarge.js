import React from 'react';
import './WidgetLarge.css';
import { Done,Close, HourglassEmpty } from '@material-ui/icons';

class WidgetLarge extends React.Component {
    render() {

        const btn = ({type}) => {
            return <button className = {"widget__btn " + type}>
                {
                    type === "approved" ? <Done/> : type === "pending" ? <HourglassEmpty/>  : <Close />
                }
            </button>
        }

        return (
            <div className = "widget__large">
                <span className="widget__large__title">Latest Transactions</span>
                <table className="widget__large__table">
                    <tr className="widget__large__tr">
                        <th className="widget__large__th">Customer</th>
                        <th className="widget__large__th">Date</th>
                        <th className="widget__large__th">Amount</th>
                        <th className="widget__large__th">Status</th>
                    </tr>
                    <tr className="widget__large__tr">
                        <td className="widget__large__user">
                            <img src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="user" className="widget__large__img" />
                            <span className="widget__large__name">SouL Regaltos</span>
                        </td>
                        <td className="widget__large__date">27 Sep 2021</td>
                        <td className="widget__large__amt">$100.00</td>
                        <td className="widget__large__status">{btn({type: "pending"})}</td>
                    </tr>
                    <tr className="widget__large__tr">
                        <td className="widget__large__user">
                            <img src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="user" className="widget__large__img" />
                            <span className="widget__large__name">SouL Regaltos</span>
                        </td>
                        <td className="widget__large__date">27 Sep 2021</td>
                        <td className="widget__large__amt">$100.00</td>
                        <td className="widget__large__status">{btn({type: "approved"})}</td>
                    </tr>
                    <tr className="widget__large__tr">
                        <td className="widget__large__user">
                            <img src="https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif" alt="user" className="widget__large__img" />
                            <span className="widget__large__name">SouL Regaltos</span>
                        </td>
                        <td className="widget__large__date">27 Sep 2021</td>
                        <td className="widget__large__amt">$100.00</td>
                        <td className="widget__large__status">{btn({type: "declined"})}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default WidgetLarge;