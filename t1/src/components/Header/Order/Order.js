import React, { Component } from "react";
import Style from "./style.module.css";

import { FaTrash } from "react-icons/fa";
export class Order extends Component {
  render() {
    return (
      <div className={Style.OrderItem}>
        <div className={Style.OrderItem__img}>
          <img onClick={()=>{this.props.onShowItem(this.props.item)}} src={"./img/" + this.props.item.img} alt={this.props.item.title} />
        </div>
        <h2>{this.props.item.title}</h2>
        
        <b>{this.props.item.price}$</b>
        <FaTrash onClick={() => this.props.onDelete(this.props.item.id)} className={Style.deleteIcon}/>
        
      </div>
    );
  }
}

export default Order;