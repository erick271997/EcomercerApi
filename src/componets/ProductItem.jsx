import { Link } from "react-router-dom";
import DetalleProducts from "../pages/DetalleProducts";




function ProductItem({ producto }) {

  const miObjeto = { producto: 1, nombre: 'Objeto 1' };
   
    return (
        <div className='items'>
          <Link to={{pathname: "/detalleProducts" ,state:{producto}}}>
            <h6>{producto.id}</h6>
        
      <figure>
        <img className='products'  src={producto.image} alt="products"/>
      </figure>
      <div className='infor-product'>
        <h2> {producto.category}</h2>
        <p className='price'> $USD: {producto.price}</p>
       <div className='h4-title'>
       <h4>{producto.title}</h4>
       </div>
       <div>
        <button className='btn' onClick={() => console.log(producto)}>Agregar al carrito</button>
      </div>
      
      {/* <Link  to={'/detalleProducts'} state= {producto}  >DetalleProducts</Link> */}
      
      
      </div>
      </Link>
          </div>
        
        
       
     );
    
}

export default ProductItem