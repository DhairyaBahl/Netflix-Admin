import React from 'react';
import './NewUser.css'

class NewUser extends React.Component {
    render () {
        return (
            <div className = "new__user">
                <h1 className="new__user__title">New User</h1>
                <form className="new__user__form">
                    <div className="new__user__item">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="John" />
                    </div>
                    <div className="new__user__item">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder="John Wick" />
                    </div>
                    <div className="new__user__item">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="johnwick@gmail.com" />
                    </div>
                    <div className="new__user__item">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="password" />
                    </div>
                    <div className="new__user__item">
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder="+91 9090110020" />
                    </div>
                    <div className="new__user__item">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder="Delhi, India" />
                    </div>
                    {/* <div className="new__user__item">
                        <label htmlFor="">Gender</label>
                        <div className = "new__user__gender">
                            <input type="radio" name="gender" id="male" value="male" />
                            <label for="male">Male</label>
                            <input type="radio" name="gender" id="female" value="female" />
                            <label for="female">Female</label>
                            <input type="radio" name="gender" id="others" value="others" />
                            <label for="others">Others</label>
                        </div>
                    </div> */}
                    <div className="new__user__item">
                        <label>Admin Access</label>
                        <select className = "new__user__select" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className = "submit__btn__div">
                        <button className = "new__user__btn">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewUser;