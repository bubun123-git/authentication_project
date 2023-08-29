import React, { useState, useRef } from "react";
import './AuthForm.css'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState); 
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (isLogin) {
            // Handle login
        } else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDHlk3s7ThaSrGiF9h8286Xuua4SjOVTsQ', { 
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.ok) {
                    // Handle successful login
                } else {
                    return res.json().then(data => {
                        console.log(data);
                        // Handle error response
                    });
                }
            })
        }
    }

    return (
        <section className="auth-form">
            <h1>{isLogin ? 'LOGIN' : "Sign Up"}</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type='email' id="email" required ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor="password">Your Password</label>
                    <input type='password' id="password" required ref={passwordInputRef} />
                </div>
                <div>
                    <button className="auth-button">{isLogin ? 'Login' : "Create Account"}</button><br/><br/>
                    <button type="button" onClick={switchAuthModeHandler} className="toggle-button">
                        {isLogin ? 'Create New Account' : 'Login with Existing Account'}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AuthForm;
