import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(book) {
    this.setState({
      cartItems: this.state.cartItems.concat(book)
    })
  }

  render() {
    return (
      <CartContext.Provider 
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.state.addToCart
      }}>
        { this.props.children }
      </CartContext.Provider>
    )
  }
}