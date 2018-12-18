import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageInput: '',
      nameInput: '',
      priceInput: 0,
      currentId: null
    }
  }

  componentDidUpdate(oldProps) {
    let { selectedItem, inventory } = this.props
    if (oldProps.selectedItem !== selectedItem) {
      let index = null;
      inventory.forEach((item, i) => {
        if (item.id === selectedItem) {
          index = i
        }
      })

      this.setState({
        imageInput: inventory[index].img,
        nameInput: inventory[index].name,
        priceInput: inventory[index].price,
        // edit: true,
        currentId: selectedItem
      })
    }
  }

  editItem(id, body) {
    axios.put(`/api/inventory/${id}`, body )
      .then(this.props.getInventory())
}

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  handleCancel() {
    this.setState({
      imageInput: '',
      nameInput: '',
      priceInput: 0,
      currentId: null
    })
  }

  addItem = () => {
    const { nameInput, imageInput, priceInput, } = this.state;
    axios.post(`/api/inventory`, { name: nameInput, img: imageInput, price: priceInput })
      .then(this.props.getInventory())
    this.handleCancel()
  }

  saveEdit = () => {
    let { imageInput, nameInput, priceInput, currentId } = this.state;
    this.editItem(currentId, { imageInput, nameInput, priceInput })
    this.handleCancel()
  }

  render() {
    let { imageInput, nameInput, priceInput, currentId } = this.state
    return (
      <div>
        <div>
          <img src={imageInput === '' ? 'http://piyaexotica.com/images/projects/Dummy.jpg' : imageInput} height='200px' alt="image" />
        </div>
        <input placeholder='image URL'
          value={imageInput}
          onChange={(e) => this.handleChange('imageInput', e.target.value)}
          type="text" />
        <input placeholder='name'
          value={nameInput}
          onChange={(e) => this.handleChange('nameInput', e.target.value)}
          type="text" />
        <input placeholder='price'
          value={priceInput}
          onChange={(e) => this.handleChange('priceInput', e.target.value)}
          type="text" />
        <button onClick={() => this.handleCancel()}
        >Cancel</button>
        {currentId === null ? 
        <button onClick = {() => this.addItem()}
        >Add to Inventory</button>
        :
        <button onClick = {() => this.saveEdit()}
        >Save</button>}

      </div>
    )
  }
}

export default Form