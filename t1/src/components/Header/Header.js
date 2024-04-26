import React, { useState } from "react";
import styles from "./style.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order/Order";

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(prevState => !prevState);
  };
  const price = ()=>{
    let summa = 0
    props.orders.forEach(el =>{ summa += Number.parseFloat(el.price)})
    return (
      <div>
        <p className={styles.summa}> Общая цена: {new Intl.NumberFormat().format(summa)} $</p>
      </div>
    )
  }

  return (
    <header>
      <div className={styles.main}>
        <h2 className={styles.logo}>House Staff</h2>
        <ul className={styles.nav}>
          <li>
            <FaShoppingCart
              onClick={toggleCart}
              className={`${styles.shopCartButton} ${cartOpen && styles.active}`}
            />
          </li>
          <li><a className={styles.link} href="#">Про нас</a></li>
          <li><a className={styles.link} href="#">Контакты</a></li>
          <li><a className={styles.link} href="#">Кабинет</a></li>
        </ul>
        {cartOpen && (
          <div className={styles.shopCart}> 
            {props.orders.length === 0 ? <p className={styles.text}>Товаров нет</p> : props.orders.map(el =>(
              <Order onShowItem ={ props.onShowItem}  onDelete={props.onDelete} key={el.id} item={el}></Order>
            ))}
             <div className={styles.allPrice}>{price()}</div>
          </div>
        )}
      </div>
      <span className={styles.img}></span>
    </header>
  );
}