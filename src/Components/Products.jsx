import React, { Component } from 'react'
import { Product } from './Product'

export default class Products extends Component {
  state={
    products:[
        {id:1,productName:"Labtop",price:50000,onsale:false,count:10},
        {id:2,productName:"Iphone",price:100000,onsale:true,count:17},
        {id:3,productName:"Ipad",price:170000,onsale:false,count:12},
        {id:4,productName:"samsong125",price:40000,onsale:true,count:2},
        {id:5,productName:"redmi",price:7000,onsale:false,count:1},
        {id:6,productName:"Labtop",price:50000,onsale:false,count:10},
        {id:7,productName:"Iphone",price:100000,onsale:true,count:17},
        {id:8,productName:"Ipad",price:170000,onsale:false,count:12},
        {id:9,productName:"samsong125",price:40000,onsale:true,count:2},
        {id:10,productName:"redmi",price:7000,onsale:false,count:1},
        {id:11,productName:"Labtop",price:50000,onsale:false,count:10},
        {id:12,productName:"Iphone",price:100000,onsale:true,count:17},
        {id:13,productName:"Ipad",price:170000,onsale:false,count:12},
        {id:14,productName:"samsong125",price:40000,onsale:true,count:2},
        {id:15,productName:"redmi",price:7000,onsale:false,count:1},
        {id:17,productName:"redmi",price:7000,onsale:false,count:1},




]
      }  

      deleteproduct=(id)=>{
        let newproducts=[...this.state.products]
        newproducts=newproducts.filter((p)=>p.id!==id)
        this.setState({products:newproducts})
        console.log(`product has id ${id} is deleted`)
      }

      updateproduct=(index)=>{
        let newproducts=[...this.state.products]
        newproducts[index].count= newproducts[index].count+1
        this.setState({products:newproducts})
        console.log(`product has id ${index} is updated`)
      }

  render() {
    return (
      <div className='maindiv'>
        <div className="cont">
        {
            this.state.products.map((p,i)=><Product 
            key={i}
            index={i}
            productinfo={p}
            delfunc={this.deleteproduct}
            updatefunc={this.updateproduct}
              ></Product>)
        }

        </div>

      </div>
    )
  }
}
