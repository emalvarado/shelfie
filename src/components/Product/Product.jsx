import React from 'react'


export default function Product(props){
  // console.log(props)
  return (
 <div>
   <img src={props.img} height='200px' alt={props.name}/>
   <div>  Product: {props.name}</div>
  <div> Price: {props.price} </div>
   <button onClick={() => props.deleteItem(props.id)}
   >Delete</button>
   <button onClick={() => props.selectItem(props.id) }
   >Edit</button>
 </div>
  )
}