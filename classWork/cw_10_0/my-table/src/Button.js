// import React from 'react';
import Product from './Product'
import Category from "./Category";
import React, {Component} from 'react';

// function Button(props) {
//     console.log(props.stocked)
//     const colorStockd = props.stocked?'btn-red':'btn-green';
//     const buttonStyle = {
//         color: props.stocked ? 'red':'green'
//     }
//     return (
//         < button onClick = {addToCart} className = {colorStockd} style = {buttonStyle} > BUY < /button>
//
// )
//
// }

// function addToCart() {
//     alert('1')
// }

class Button extends Component{
    constructor(props) {
        super(props);
        this.stocked = props.stocked;
        this.colorStockd = props.stocked?'btn-red':'btn-green';
        this.state = {
            added: false,
            date: new Date().toLocaleTimeString()
        };
        
        setInterval(this.updateTime,100 )

        // this.addToCart = function(){
        //     this.setState({added:props})
        // }.bind(this)

    }

    updateTime = () => {
        this.setState({
            date: new Date().toLocaleTimeString()
        })
    }

    addToCart = () => {
        this.setState({
            added:true,
            date: new Date().toLocaleTimeString()
        })
    };

    render(){
        const btnStyle = {color: this.stocked ? 'red':'green'};
        const btnText = this.state.added ? 'added':'buy';

        return(
            <div>
                < button onClick = {this.addToCart} className = {this.colorStockd} style = {btnStyle} > {btnText} < /button>
               {this.state.date}
            </div>

        )
    }
}

export default Button;