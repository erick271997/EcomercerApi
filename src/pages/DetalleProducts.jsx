import React, { Fragment, useEffect, useState } from 'react'
import { BiLayout } from 'react-icons/bi'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import { useLocation, useParams } from 'react-router-dom';
import ProductItem from '../componets/ProductItem';

function DetalleProducts () {
    const [data, setData] = useState({});
    const [firstItemName, setFirstItemName] = useState('');
    const { id } = useParams();
   
    useEffect(() => {
       fetch(`https://fakestoreapi.com/products/${id}`)
         .then(response => {
          //console.log(response.json())
          response.json().then(DataInf => {
            setData(DataInf);
        
          })
        })
         .then(json => setData(json))
         .catch(error => console.log('Error:', error));
         
        //  const firstItem = data.find(item => item);
        //  setFirstItemName(firstItem ? firstItem.name : 'No hay elementos en la lista');
   
         
    }, []);
  
  
 return (
    <>
      <Header/>
      <>
      <div className='container-des'>
      {
      data &&
      
      <di className="container-img">
<h1>

        {data.id}
        </h1>
       <h6 className='h-title'>{data.title}</h6>
<div className='price'>
  <div className='div-us'>
    <h2 className='us'> PRICE: USD</h2>
    
  
  <h2 className='h2-price'>
    <h5 className='h5-price'>$</h5> {data.price}
    
  </h2>
  </div>
  
 </div>
      <figure>
        <img className='img-produc' src={data.image} alt=""/>
        
      </figure>
         
        <h1>
        {data.category}
       </h1>
       <div className='container-descri'>
        <p className='desc-data'>
      {data.description}
        </p> 
       </div>
      </di>
      }

      </div>
      </>
      <Footer/>
   
       

    
    </>
 )

}

export default DetalleProducts