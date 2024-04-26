import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";
import ShowFulItem from "./components/ShowFulItem/ShowFulItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders:[],
      currentItems:[],
      items:[
        {
          id: 1,
          title: "Продукт 1",
          img: "chair-grey.jpeg",
          desc: "Описание продукта 1",
          category: "chairs",
          price: 100
      },
      {
          id: 2,
          title: "Продукт 2",
          img: "table.webp",
          desc: "Описание продукта 2",
          category: "tables",
          price: 200
      },
      {
          id: 3,
          title: "Продукт 3",
          img: "sofa.jpeg",
          desc: "Описание продукта 3",
          category: "sofa",
          price: 150
      },
      {
          id: 4,
          title: "Продукт 4",
          img: "chair-white.jpeg",
          desc: "Описание продукта 4",
          category: "chairs",
          price: 300
      },
      {
          id: 5,
          title: "Продукт 5",
          img: "wall-light.jpeg",
          desc: "Описание продукта 5",
          category: "light",
          price: 250
      }
      ],
      showFullItem: false,
      fullItem:[]

    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrdeder = this.deleteOrdeder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header onShowItem={this.onShowItem} orders={this.state.orders} onDelete={this.deleteOrdeder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems}  onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFulItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem:item})
    this.setState({
      showFullItem: !this.state.showFullItem
    })
  }

  chooseCategory(category){
    if(category === "all"){
      this.setState({currentItems: this.state.items})
      return 
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }


  deleteOrdeder(id){
    this.setState({orders: this.state.orders.filter(el=> el.id !== id)})
  }


  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders:[...this.state.orders, item]}, ()=>{
      console.log(this.state.orders);
    })
  }
}

export default App;