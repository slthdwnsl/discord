import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <h2>I am the login page</h2>

            <div className="login__logo">
                <img 
                    src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b52aa9e99b832574a53_full_logo_blurple_RGB.png" 
                    alt="" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;