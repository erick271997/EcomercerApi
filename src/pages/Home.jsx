import React, { useState, useEffect } from 'react';
import ProductItem from '../componets/ProductItem';

function Home() {
 const [data, setData] = useState([]);
 const [firstItemName, setFirstItemName] = useState('');


 useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log('Error:', error));
      
      const firstItem = data.find(item => item);
      setFirstItemName(firstItem ? firstItem.name : 'No hay elementos en la lista');

      
 }, [data]);

 return (

    <div className='container-items'>
      
      {data.map((item, index) => (
        <div key={index}>
         
         <ProductItem producto={item} />
   </div>

      ))}
        
    </div>
    
 );
}

export default Home;