import { Link } from "react-router-dom";
import Style from "./registration.module.css";
import { useEffect, useState } from "react";
import { Input } from 'antd';
import { Button, Flex } from 'antd';
const Registration = () => {
  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("Login некорректен");
 
  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState("Password некорректен");

  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordRepeatDirty, setPasswordRepeatDirty] = useState(false);
  const [passwordRepeatError, setPasswordRepeatError] =
    useState("Password некорректен");

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email некорректен");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, passwordError]);

  const passwordRepeatHandler = (e) => {
        setPasswordRepeat(e.target.value);
        if (e.target.value !== password) {
            setPasswordRepeatError("Пароли не совподают");
        } else {
            setPasswordRepeatError("");
        }
    };

 

 

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setNameError("некорректный name");
    } else {
      setNameError("");
    }
  };
  const passwordHandler = (e) => {
        setPassword(e.target.value);
        const regex = /^[a-z]+$/;
        if (!regex.test(String(e.target.value).toLowerCase())) {
            setPasswordError("некорректный password");
        } else if (passwordRepeat && e.target.value !== passwordRepeat) {
            
            setPasswordError("Пароли не совпадают");
        } else {
            setPasswordError("");
        }
    };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const regex = /^[^@]+@[^@]+\.[a-z]+$/i;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setEmailError("некорректный Email");
    } else {
      setEmailError("");
    }
  };
  

  return (
    <div className={Style.LoginModal}>
      <form className={Style.LoginModal__form}>
        <h2>Вход</h2>
        <div className={Style.box}>
          {nameDirty && nameError && (
            <div style={{ color: "red" }}>{nameError}</div>
          )}
        </div>
        
        <Input
          id="name"
          onBlur={(e) => blurHandler(e)}
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => nameHandler(e)}
        />
        
        <div className={Style.box}>
          {passwordRepeatDirty && passwordRepeatError && (
            <div style={{ color: "red" }}>{passwordRepeatError}</div>
          )}
        </div>
        <Input 
          onBlur={(e) => blurHandler(e)}
          name="password"
          type="password"
          placeholder="Password"
          value={passwordRepeat}
          onChange={(e) => passwordRepeatHandler(e)}
        />
        <div className={Style.box}>
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
        </div>
        <Input
          onBlur={(e) => blurHandler(e)}
          name="password"
          type="password"
          placeholder="Repeat password"
          value={password}
          onChange={(e) => passwordHandler(e)}
        />
        <div className={Style.box}>
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
        </div>
        <Input
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => emailHandler(e)}
        />
             <Button className={Style.btn} disabled={!formValid} type="submit">
          Войти
        </Button>
      </form>
          <Link  to="/" className={Style.closeBtn} >
            Закрыть
          </Link>
    </div>
  );
};

export default Registration;
