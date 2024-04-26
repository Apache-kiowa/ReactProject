import { Link } from 'react-router-dom';
import Style from './loginModal.module.css';
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import { Button, Flex } from 'antd';
const LoginModal = () => {
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState('Ошибка емаил');
  const [password, setPassword] = useState('');
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState('Ошибка пороль');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    const regex = /^[a-zA-Z0-9]+$/
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setNameError('некорректный name');
    } else {
      setNameError('');
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const regex = /^[a-z]+$/
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setPasswordError('некорректный password');
    } else {
      setPasswordError('');
    }
  };
  

  // const passwordHandler = (e) => {
  //   setPassword(e.target.value);
  //   if (e.target.value.length < 3 || e.target.value.length > 8) {
  //     setPasswordError('Пароль длинее 3 и меньше 8');
  //     if (!e.target.value) {
  //       setPasswordError('Ошибка пороль');
  //     }
  //   } else {
  //     setPasswordError('');
  //   }
  // };

  return (
    <div className={Style.LoginModal}>
      <form className={Style.LoginModal__form}>
        <h2>Вход</h2>
        <div className={Style.box}>
          {(nameDirty && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
        </div>
        <Input
          onBlur={(e) => blurHandler(e)}
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => nameHandler(e)}
        />
        <div className={Style.box}>
          {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
        </div>
        <Input onBlur={(e) => blurHandler(e)}
          name="password"
          type="password"
          
          value={password}
          onChange={(e) => passwordHandler(e)} placeholder="Password" />
        
        <Button className={Style.btn} disabled={!formValid} type="submit">
          Войти
        </Button>
      </form>
      <Link to="/" className={Style.closeBtn} >
            Закрыть
      </Link>
    </div>
  );
};

export default LoginModal;
