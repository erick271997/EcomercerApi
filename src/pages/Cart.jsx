import React, { useState, useEffect } from 'react';
import Header from "../componets/Header";
import Footer from "../componets/Footer"

const Cart = () => {
 const [productos, setProductos] = useState([]);

 useEffect(() => {
    obtenerProductosDelCarrito();
 }, []);

 const obtenerProductosDelCarrito = () => {
    const productosDelCarrito = localStorage.getItem('cart');
    if (productosDelCarrito) {
      setProductos(JSON.parse(productosDelCarrito));
    }
 };

 return (
<>
      <Header/>    
      <div className="Car-container">
      <h1 className='titulo-cart'>Carrito de Compras</h1>
      <ul>
        <br/>
        {productos.map((producto, index) => (
          <li key={index}>
             <h3 className='title-cart'>{producto.title}</h3>
            <div className='Cart-pro'>
              
              <figure>
                <img src={producto.image} alt='image-Produc'/>
                
              </figure>
              <p className='price-cart'>
                {producto.price} - $

              </p>
              
              
            </div>
       
            </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
 );
};

export default Cart;