import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SigninPopupStyles.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig';

const SigninPopup = ({ show, onClose }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setFormSubmitted(true);
        } catch (error) {
            setError("Invalid credentials, please try again.");
        }
    };

    if (!show) {
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>×</button>
                {formSubmitted ? (
                    <div className="thank-you-message">
                        You have logged in successfully!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2>Sign In</h2>
                        {error && <p className="error-message">{error}</p>}
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <button className='form-button' type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

SigninPopup.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SigninPopup;
