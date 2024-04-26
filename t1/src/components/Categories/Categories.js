import React, { Component } from 'react'
import Style from "./style.module.css";
export class Categories extends Component {
  constructor(props){
    super(props)
    this.state = {
      
      categories:[
        {
          key: 'all',
          name: 'всё'
        },
        {
          key: 'chairs',
          name: 'стулья'
        },
        {
          key: 'tables',
          name: 'столы'
        },
        {
          key: 'sofa',
          name: 'диваны'
        },
        {
          key: 'light',
          name: 'cвет'
        },
      ]
    }
  }
  render() {
    
      return (
        <div className={Style.categories}>
          {this.state.categories.map(el => (
            <div onClick={()=> this.props.chooseCategory(el.key)} key={el.key}>{el.name}</div>
          ))}
        </div>
    )
  }
}

export default Categories