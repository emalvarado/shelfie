import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios'




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
      selectedItem: null,
      // edit: false
    }
  }



  componentDidMount() {
    this.getInventory()
  }

  getInventory = () => {
    axios.get(`/api/inventory`).then(res => {
      // console.log(res)
      this.setState({
        inventory: res.data
      })
    })
  }

  selectItem = (id) => {
// console.log(id)
    this.setState({
      selectedItem: id
    })
  }

// toggleEdit=()=>{
//   this.setState({
//     edit: !this.state.edit
//   })
//   console.log(this.state.edit)
// }


  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard selectItem={this.selectItem}
        toggleEdit={this.toggleEdit}
        edit={this.state.edit}
        getInventory={this.getInventory}
          inventory={this.state.inventory} />
        <Form edit={this.state.edit}
        selectedItem={this.state.selectedItem}
          getInventory={this.getInventory}
          inventory={this.state.inventory} />
      </div>
    );
  }
}

export default App;
