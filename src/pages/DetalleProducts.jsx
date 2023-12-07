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
      <div className='container-des'>
      {
      data &&
      <di>

      <figure>
        <img className='img-descripti' src={data.image} alt=""/>
      </figure>
       <h1>
        {data.id}
        </h1>
        
        <p>

          
        </p>
        {data.description}
       
       
      </di>
      
      
      }

      </div>

     

      <Footer/>
   
       

    
    </>
 )

}

export default DetalleProducts