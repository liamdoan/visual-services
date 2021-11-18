import React from 'react'
import '../../App.css'

function SignUp() {
    return (
        <div className="sign-up">
            <div className="sign-up-container">
                <div className="form-wrap">
                    <div className="form-content">
                        <form className="content" action="#">
                            <h2>Book our services</h2>
                            <label htmlFor="for">Name</label>
                            <input type="text" required />
                            <label htmlFor="for">Services</label>
                            <input type="number" min="1" max="10" required />
                            <label htmlFor="for">Date</label>
                            <input type="date" required />
                            <label htmlFor="for">Email</label>
                            <input type="Email" required />
                            <label htmlFor="for">Message</label>
                            <input type="text" />
                            <button type="submit">Confirm</button>
                        </form>
                        <p>You will receive your booking confirmation by email</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default SignUp
