import React from "react";
import Style from "./FavoritesItem.module.css";
import { ReactComponent as Logo } from "./Vector1.svg";
import { ReactComponent as Stars } from "./Vector2.svg";
import { removefavoritsid } from "../../../../store/slice/HotelsSlice";
import { useDispatch } from "react-redux";
function FavoritesItem(props) {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removefavoritsid(props.id))
    console.log(props.id);
  }
  return (
    <div className={Style.Item}>
      <div className={Style.content}>
        <section>
          <div className={Style.sectionBox}>
            <h3 className={Style.nameHotel}>{props.name}</h3>
            <Logo onClick={remove} alt="" className={Style.heart} />
          </div>

          <p className={Style.dateText}>7 июля 2020 - 1 день</p>
          <div className={Style.starsBox}>
            <div className={Style.stars}>
              <Stars className={Style.star} />
              <Stars className={Style.star} />
              <Stars className={Style.star} />
              <Stars className={Style.star} />
              <Stars className={Style.star} />
            </div>
            <p className={Style.priceText}>Price:</p>
            <p className={Style.price}>23 924 ₽</p>
          </div>
        </section>
      </div>
      <line className={Style.line}> </line>
    </div>
  );
}

export default FavoritesItem;
