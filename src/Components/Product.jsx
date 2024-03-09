import { Component } from "react";
import '../App.css';


export class Product extends Component
{
    state={}

    render()
    {
        return(
            <div className=" productdiv">
                <p className="p">Id = {this.props.productinfo.id}</p>
                <p className="p">Product Name = {this.props.productinfo.productName}</p>
                <p className="p">Price = {this.props.productinfo.price}</p>
                <p className="p">Count = {this.props.productinfo.count}</p>


            {
                this.props.productinfo.onsale===true?<div className="sale">sale</div>:""
            }

            <div className="btns">
            <button className="delete" onClick={()=>this.props.delfunc(this.props.productinfo.id)}>Delete</button>
            <button className="update" onClick={()=>this.props.updatefunc(this.props.index)}>Update</button>
            </div>


                </div>

                    )
    }
}