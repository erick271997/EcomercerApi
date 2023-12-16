import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componets/Header';
import Footer from '../componets/Footer'

function DetailProducts() {
 const [cart, Setcart] = useState(0);

 const [data, setData] = useState({});
 const { id } = useParams();

 useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        //console.log(response.json())
        response.json().then(DataInf => {
          setData(DataInf);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
 }, [id]);

 const handleAddToCart = () => {
    Setcart(cart + 1);
    console.log(handleAddToCart)
 };

 useEffect(() => {
   localStorage.setItem('cart', cart);
 }, [cart]);

 useEffect(() => {
   const storedCart = localStorage.getItem('cart');
   if (storedCart) {
     Setcart(Number(storedCart));
   }
 }, []);

 return (
    <div>
      <Header/>
      <h1>{data.title}</h1>
      <img src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <p>
        <b>Price:</b> {data.price}
      </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
   
      <Footer/>
    </div>
 );
}

export default DetailProducts;