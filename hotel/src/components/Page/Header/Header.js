import React from 'react'
import Style from "./Header.module.css";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className={Style.header}>
      
      <h1 className={Style.title}>Simple Hotel Check</h1>
      <Link to="/registration" className={Style.link}> Выйти <img className={Style.img} src="img/logOut.svg" alt="" /></Link>
    </header>
  )
}
