import React from 'react'
import Navbar from '../WebComponent/Navbar';
import Announcement from '../WebComponent/Announcement';
import Slider from '../WebComponent/Slider'
import Categories from '../WebComponent/Categories';
import Products from '../WebComponent/Products';
import Newsletter from '../WebComponent/Newsletter';
import Footer from '../WebComponent/Footer';

const Home = () => {
  return (
    <div>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Home;