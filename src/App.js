
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './componets/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import NotFound from './NotFound';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist'
import DetalleProducts from './pages/DetalleProducts';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
 }, []);

 const handleItemClick = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    setSelectedItem(selectedItem);
 };
 
  return (
    <>
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}></Route>
      </Route>
       <Route path='/shop' element={<Shop />} ></Route>
       <Route path='/blog' element={<Blog />} ></Route>
       <Route path='/about' element={<About />} ></Route>
       <Route path='/contact' element={<Contact/>} ></Route>
       <Route path='/cart' element={<Cart/>} ></Route>
       <Route path='/login' element={<Login/>} ></Route>
       <Route path='/wishlist' element={<Wishlist/>} ></Route>
       <Route path='/detalleProducts/:id' element={<DetalleProducts/>} ></Route>
       
       <Route component={<NotFound/>} ></Route>
        </Routes> 

       
      </BrowserRouter>
    </>
  );
}

export default App;
