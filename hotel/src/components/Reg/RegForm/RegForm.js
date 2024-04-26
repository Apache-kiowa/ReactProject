import React, { useEffect, useState } from "react";
import Style from "./RegForm.module.css";
import { Link } from "react-router-dom";
export default function RegForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  

  useEffect(() => {
    
  }, [emailError, passwordError]);

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 8) {
      setPasswordError("Не менее 8-ми символов");
    } else {
      setPasswordError(""); 
    }
    if (!e.target.value) {
      setPasswordError("Пароль не может быть пустым");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const enteredEmail = e.target.value;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(String(enteredEmail).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError(""); 
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form className={Style.regForm} onSubmit={handleSubmit}>
      <h2 className={Style.title}>Simple Hotel Check</h2>
      <div className={Style.loginBox}>
        <p className={Style.text}>Логин</p>
        <input
          onBlur={(e) => blurHandler(e)}
          onInput={(e) => emailHandler(e) } // Используем onInput вместо onChange
          className={Style.loginInput}
          type="email"
          name="email"
          value={email}
        />
        {emailDirty && emailError && (
          <p className={Style.textError}>{emailError}</p>
        )}
      </div>
      <div className={Style.passwordBox}>
        <p className={Style.text}>Пароль</p>
        <input
          onBlur={(e) => blurHandler(e)}
          className={Style.passwordInput}
          type="password"
          name="password"
          value={password}
          onChange={(e) => passwordHandler(e)}
        />
        {passwordDirty && passwordError && (
          <p className={Style.textError}>{passwordError}</p>
        )}
      </div>
      <Link to="/"  type="submit" className={Style.btn}>
        Войти
      </Link>
    </form>
  );
}
