import React, { Component } from 'react'
import Item from './Item/Item'
import Style from "./style.module.css";
export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
          <Item onShowItem ={ this.props.onShowItem} Item={el} key={el.id} onAdd={this.props.onAdd}/>
        ))}
      </main>
    )
  }
}

export default Items