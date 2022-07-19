import React, { useState, useRef, useEffect, useContext } from "react";
import { Button } from "@mui/material";
import AuthContext from "../Context/AuthProvider";



const LoginScreen = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pw, setPw] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [succes, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg("");
    }, [user, pw])

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            console.log(user, pw);
            setUser("");
            setPw("");
            setSuccess(true);

        } catch (err) {

        }



    }

    return (

        <>
            {succes ? (


                <section>
                    <p>logged in</p>
                </section>

            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive">{errMsg}</p>
                    <h1>Sign in</h1>
                    <form onSubmit={submitHandler}>
                        <label htmlFor="username">Username:</label>
                        <input type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input type="password"
                            id="password"
                            onChange={(e) => setPw(e.target.value)}
                            value={pw}
                            required
                        />
                        <button>Sign In</button>

                    </form>
                </section>
            )}
        </>


    )

}
export default LoginScreen;