import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (name === "Aman" && password === "aman") {
            setUser({ 'name': "Aman", 'password': "aman" });
        }
        console.log(name, password);
    }

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/'); // Redirect to / page
            // window.location.href = "/";
        }
    }, [user])

    return (
        <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submit}>Submit </button>
        </form>
    )

}

export default Login;