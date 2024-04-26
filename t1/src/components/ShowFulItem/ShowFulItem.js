import React, { Component } from "react";
import Style from "./style.module.css";
export class ShowFulItem extends Component {
  render() {
    return (
      <div className={Style.fullItem}>
        <div className={Style.fullItemBox}>
        <div className={Style.item__img}>
          <img onClick={()=>{this.props.onShowItem(this.props.item)}} className={Style.img} src={"./img/" + this.props.item.img} />
        </div>
        <h2 className={Style.h2}>{this.props.item.title}</h2>
        <p className={Style.p}>{this.props.item.desc}</p>
        <b className={Style.b}>{this.props.item.price}$</b>
        <div
          className={Style.addToCart}
          onClick={() => this.props.onAdd(this.props.item)}>
          +
        </div>
        </div>
      </div>
    );
  }
}

export default ShowFulItem;
