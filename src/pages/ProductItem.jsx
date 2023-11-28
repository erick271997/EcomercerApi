import React from 'react'

function ProductItem({ producto }) {
    return (
        <>
        <div className='container'>
            <div className='card'>
                <div className='image-box"'>
                    <img src={producto.image} className='product' alt="Producto"/>
                </div>
            
            </div>
         </div>
       
          <h2 className='title'>{producto.title}</h2>
          <div className='descriptio'>
              <p className=''>{producto.description}</p>
              <div className='numero-price'>
                <p className='price'>{producto.price}</p>
              </div>
          
          </div>
        
           </>
       
     );
    
}

export default ProductItem