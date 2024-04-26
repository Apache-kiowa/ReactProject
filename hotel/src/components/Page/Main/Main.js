import React from "react";
import Style from "./Main.module.css";
import Item from "./Item/Item";
import {
  productSelector,
  sitySelector,
  dateSelector,
  favoritesIdSelector
} from "../../../store/selector/selector";
import { useSelector } from "react-redux";

function Main() {
  const date = useSelector(dateSelector);
  const hotelsArray = useSelector(productSelector);
  const hotels = hotelsArray.flat();
  const sity = useSelector(sitySelector);
  const idFav = useSelector(favoritesIdSelector);

  // Функция для проверки, добавлен ли отель в избранное
  const isFavorite = (id) => {
    return idFav.includes(id);
  };

  return (
    <div className={Style.Main}>
      <div className={Style.MainBox}>
        <section className={Style.sectionOne}>
          <div className={Style.sectionOneBox}>
            <h2 className={Style.title}>Отели</h2>
            <img src="./img/ss.svg" alt="" />
            <h2 className={Style.sectionOneSity}>{sity}</h2>
          </div>
          <p className={Style.date}>{date}</p>
        </section>
        <section>
          <div className={Style.slider}>
            <img src="img/23.png" alt="" />
            <img src="img/24.png" alt="" />
            <img src="img/28.png" alt="" />
          </div>
          {/* Выводим количество избранных отелей */}
          <p className={Style.text}>Добавлено в Избранное: {idFav.length} отелей</p>
        </section>
        <div className={Style.itemBox}>
          {/* Проверяем, добавлен ли отель в избранное и передаем это в Item */}
          {hotels.map((e) => {
            return <Item id={e.id} name={e.fullName} isFavorite={isFavorite(e.id)} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;