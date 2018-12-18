import React, {Component} from 'react'
import Product from '../Product/Product';
import axios from 'axios'


class Dashboard extends Component{
  // constructor(props){
  //   super(props);
  // }

deleteItem = (id) => {
  axios.delete(`/api/inventory/${id}`)
  .then( this.props.getInventory())
}

  render(){
    // console.log(this.props.inventory)
    let listToDisplay = this.props.inventory.map((item, i) => {
      return (
        <div key={i}>
          <Product selectItem={this.props.selectItem}
          deleteItem={this.deleteItem}
          name={item.name}
          id={item.id}
          img={item.img}
          price={item.price}
          index={i}
          toggleEdit={this.props.toggleEdit}
          edit={this.props.edit}/>
        </div>
      )
    })
    return(
      <div>
      {listToDisplay}
      </div>
    )
  }
}

export default Dashboard;