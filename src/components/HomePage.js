import React, { Component } from 'react'
import axios from '../axios'
import Navbar from './NavBar'
import JumbotroN from './Jumbotron'
import CarD from './Card'
import DraweR from './Drawer'
import CartItem from "./CartItem";

export default class HomePage extends Component {
    state={
        items:[],
        open:false,
        value:null,
        FilteredItems:[],
        removeId:null

    }

    componentDidMount(){
        axios.get('https://sustainhill.firebaseio.com/.json')
        .then(response => {
            this.setState({items:response.data.lists})
            console.log(response.data.lists)
        })
    }

    handleDrawer =() =>{
    this.setState({open:true})
    }

    handleClose=()=>{
    this.setState({open:false})
    }

    handleClick= (e)=> {
  
    this.setState({ value: e.currentTarget.getAttribute("data-id") },this.CartLogic);
    this.setState({open:true})  
    }

    CartLogic = () =>{
        console.log(this.state.value);
        const filter = [
          ...this.state.items.filter((item) => item.id === this.state.value),
          ...this.state.FilteredItems,
        ];
        console.log(filter);
        this.setState({ FilteredItems: filter });
        console.log(this.state.FilteredItems);
    }

    RemoveLogic = (e) =>{
        const removeid = e.currentTarget.getAttribute("data-id")
        const remove = this.state.FilteredItems.filter(item => item.id !== removeid)
        this.setState({FilteredItems:remove})
    }

    render() {
        
        return (
          <div>
            <Navbar handleDrawer={this.handleDrawer} />
            <DraweR open={this.state.open} close={() => this.handleClose}>
              <CartItem item={this.state.FilteredItems} remove={this.RemoveLogic}/>
            </DraweR>
            <JumbotroN />
            <CarD
              items={this.state.items}
              handleClick={this.handleClick}
              
            />
          </div>
        );
    }
}
