import React, { useEffect } from "react";
import Style from "./Favorites.module.css";

import FavoritesItem from "./FavoritesItem/FavoritesItem";
import { useSelector } from "react-redux";
import { favoritesSelector } from "../../../store/selector/selector";

function Favorites() {
  const favorites = useSelector(favoritesSelector);
  useEffect(()=>{
    
  },[favorites])
  return (
    <div className={Style.Favorites}>
      <h2 className={Style.title}>Избранное</h2>
      <div>
        <div className={Style.btns}>
          <a className={Style.btnOne}>Рейтинг </a>
          <a className={Style.btnTwo}>Цена </a>
        </div>
        <div className={Style.itemBox}>
          {favorites.map((e) => {
            return<FavoritesItem id={e.id} name={e.label}></FavoritesItem>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
