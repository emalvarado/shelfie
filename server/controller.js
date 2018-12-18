module.exports = {
  getAll: (req,res) => {
    const db = req.app.get('db')
    
    db.get_inventory().then(response =>{
      res.status(200).send(response)
    })
  },

  createItem: (req, res) => {
    const db = req.app.get('db')
    let {name, img, price} = req.body
    
    db.create_product({name, img, price}).then(response =>{
      res.status(200).send(response)

    })
  },

  deleteItem: (req,res) => {
    const db = req.app.get('db')
    const {id} = req.params

    db.delete_product({id}).then( response => {
      res.status(200).send(response)
    })
  },

  updateItem: (req, res) => {
    const db= req.app.get('db')
    const {id} = req.params;
    const{ name, price, img} = req.body;

    db.update_product({id, name, img, price})
    .then( response => {
      console.log(response)
      res.sendStatus(200)
    })
  }
}