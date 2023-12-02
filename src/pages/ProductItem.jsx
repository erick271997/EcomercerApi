import React from 'react'

function ProductItem({ producto }) {
    return (
        <div className='items'>
            <h6>{producto.id}</h6>
        
      <figure>
        <img src={producto.image} alt="product"/>
      </figure>
      <div className='infor-product'>
        <h2> {producto.category}</h2>
        <p className='price'> $USD: {producto.price}</p>
        <h4>{producto.title}</h4>
        <button onClick={() => console.log(producto)}>Agregar al carrito</button>
      
      </div>
          </div>
        
        
       
     );
    
}

export default ProductItem