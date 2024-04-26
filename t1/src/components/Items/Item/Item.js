import React, { Component } from "react";
import Style from "./style.module.css";

export class Item extends Component {
  render() {
    const { img, title, desc, price } = this.props.Item;
    return (
      <div className={Style.item}>
        <div className={Style.item__img}>
          <img onClick={()=>{this.props.onShowItem(this.props.Item)}} className={Style.img} src={"./img/" + this.props.Item.img} />
        </div>
        <h2 className={Style.h2}>{title}</h2>
        <p className={Style.p}>{desc}</p>
        <b className={Style.b}>{price}$</b>
        <div
          className={Style.addToCart}
          onClick={() => this.props.onAdd(this.props.Item)}>
          +
        </div>
      </div>
    );
  }
}

export default Item;
