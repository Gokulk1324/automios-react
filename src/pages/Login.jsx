import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // create user object
        const user = {
            email: email,
            password: password
        };

        // store in browser
        localStorage.setItem("user", JSON.stringify(user));

        alert("Login Successful");
        window.location.href = "/";
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
            <form onSubmit={handleLogin} style={{ width: "300px" }}>

                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ width: "100%", padding: "10px", margin: "10px 0" }}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: "100%", padding: "10px", margin: "10px 0" }}
                />

                <button style={{ width: "100%", padding: "10px" }}>
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;