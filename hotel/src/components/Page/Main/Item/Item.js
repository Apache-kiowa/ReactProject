import React, { useState } from "react";
import Style from "./Item.module.css";
import { ReactComponent as Logo } from "./Vector1.svg";
import { ReactComponent as House } from "./Group.svg";
import { ReactComponent as Stars } from "./Vector2.svg";
import { useDispatch } from "react-redux";
import {
  addFavoritesList,
  removefavoritsid,
} from "../../../../store/slice/HotelsSlice";

function Item(props) {
  const dispatch = useDispatch();
  const [examination, setExamination] = useState(false);

  const f1 = () => {
    dispatch(addFavoritesList(props.id));
    setExamination(true);
  };

  const remove = () => {
    dispatch(removefavoritsid(props.id));

    setExamination(false);
  };

  return (
    <div key={props.id} className={Style.Item}>
      <div className={Style.content}>
        <section className={Style.sectionOne}>
          <div className={Style.houseLogoСircle}>
            <House className={Style.houseLogo} />
          </div>
          <div className={Style.sectionBox}>
            <h3 className={Style.nameHotel}>{props.name}</h3>
            <p className={Style.dateText}>7 июля 2020  - 1 день</p>
            <div className={Style.stars}>
              <Stars className={Style.star} />
              <Stars className={Style.star} />
              <Stars className={Style.star} />
              <Stars className={Style.star} />
              <Stars className={Style.star} />
            </div>
          </div>
        </section>
        <section className={Style.SectionsTwo}>
          <Logo
            onClick={examination? remove : f1}
            alt=""
            className={props.isFavorite ? Style.heartActive : Style.heart}
          />
          <div className={Style.SectionsTwoBox}>
            <p className={Style.priceText}>Price:</p>
            <p className={Style.price}>23 924 ₽</p>
          </div>
        </section>
      </div>
      <line className={Style.line}> </line>
    </div>
  );
}

export default Item;
