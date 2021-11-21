import React from "react";
import { useHistory } from "react-router-dom"
import { useState , useEffect } from "react";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
      useEffect(() => {
        if (localStorage.getItem("user-info")) {
          history.push("/src/pages/Home")
        }
    }, [])
    async function Login()
    {
      console.warn(email,password);
      let item={email,password};
      let result= await fetch("http://localhost:3001/login", {
        method: "POST",
        headers:{
                  "content-type": "application/json",
                  "Accept": "application"
        },
        body:JSON.stringify(item)
      });
        result = await result.json();
        localStorage.setItem("accessToken",JSON.stringify(result))
        history.push("/src/pages/Home")
    }

  return (
    <div className="Containerlogin">
      <div className="box">
      <h1>WELCOME TO VERIGO</h1>
      </div>
      <div className="inputs">
        <input
          type="email"
          className="form-control"
          onChange={(e) => {
            setEmail(e.target.value);}}
          value={email}
          placeholder="Enter Email"
        />
      </div>
      <div>
        <div className="inputs">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <button
          className="loginbutton"
          onClick={Login}
          type="submit"
          value="Register"   
        >
          Sign In
        </button>
      </div>
      <div className="register">
        <p>Don't have an account?</p>
      </div>
      <div className="register1">
      <p>Register</p>
      </div>
      
    </div>
  );
};

export default Login;