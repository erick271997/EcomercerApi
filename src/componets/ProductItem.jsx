import { Link } from "react-router-dom";
import DetalleProducts from "../pages/DetalleProducts";
import Cart from '../pages/Cart'




function ProductItem({ producto }) {

  
   
    return (
        <div className='items'>
          <Link to={{pathname: `/detalleProducts/${producto.id}`}}>
            <h6>{producto.id}</h6>
        
      <figure>
        <img className='products'  src={producto.image} alt="products"/>
      </figure>
      <div className='infor-product'>
      <p className='Deta-price'> $USD: {producto.price}</p>
        <h2> {producto.category}</h2>
     
       <div className='h4-title'>
       <h4>{producto.title}</h4>
       </div>  
       
       <div>
 <br/>
      </div>
   
      {/* <Link  to={'/detalleProducts'} state= {producto}  >DetalleProducts</Link> */}
      
      
      </div>
         <Cart/>
      </Link>
          </div>
        
        
       
     );
    
}

export default ProductItem