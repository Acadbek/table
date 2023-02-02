import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onSave = () => {
    if (loginRef.current.value === "asad" && pwRef.current.value === "1234") {
      localStorage.setItem("token", true);
      navigate("/users");
    } else {
      localStorage.setItem("token", false);
      alert("parol yoki login xato");
    }
  };

  const loginRef = useRef();
  const pwRef = useRef();

  return (
    <div className="bg-black h-screen w-full">
      <div className="flex gap-4 justify-center items-start">
        <input ref={loginRef} type="text" placeholder="Login" />
        <input ref={pwRef} type="password" placeholder="Password" />
        <p className="text-white">password: 1234</p>
        <p className="text-white">login: asad</p>
        <button
          onClick={onSave}
          className="bg-white text-black px-4 rounded-sm"
        >
          GO
        </button>
      </div>
    </div>
  );
};

export default Login;
