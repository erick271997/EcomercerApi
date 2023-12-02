import React from 'react'

function ProductItem({ producto }) {
    return (
        <div className='items'>
            <div className='ring'>
            <h1>{producto.id}</h1>
            </div>
            
              <img src={producto.image} className='product' alt="Producto"/>
              <div className='product-items'>
                <h2 className='price'>{producto.price}</h2>
                <div className='items-description'>
                      <p className='description'>{producto.description}</p>
                </div>
              
              </div>
          </div>
        
        
       
     );
    
}

export default ProductItem