
import { LineAxisOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import {popularProducts} from "../data";
import Product from './Product';
import axios from 'axios';
import {useState,useEffect} from 'react';
const Container =styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;
const Products = ({cat ,filters,sort}) => {
//useEffect() , is used on dependency ,when it change it call before rendering component, like clearing we use, like predefined change.
const[products,setProducts]=useState([]);
const [filteredProducts,setFilteredProducts]=useState([]);

//when category change fetch products before rendering components.   

useEffect(() => {
         const getProducts=async()=>{
                  
          try{  
            const res=await axios.get(cat ? `/api/products?category=${cat}`
            : "/api/products");
            console.log(res);
             setProducts(res.data);
          }
          catch(e){
            console.log(e);
          }
         };
         getProducts();
}, [cat]);


//filter objects and array in javascript.
useEffect(() => {
  cat &&
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
}, [products, cat, filters]);

useEffect(() => {
  if (sort === "newest") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.createdAt - b.createdAt)
    );
  } else if (sort === "asc") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.price - b.price)
    );
  } else {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => b.price - a.price)
    );
  }
}, [sort]);

  return (
    <Container>
    {cat
      ? filteredProducts.map((item)=><Product item={item} key={item.id} /> )
      :products
        .slice(0,8)
         .map((item)=><Product item={item} key={item.id}/>)
      };

    </Container>
  )
}

export default Products