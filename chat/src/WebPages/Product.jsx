
import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from '../WebComponent/Announcement';
import Footer from '../WebComponent/Footer';
import Navbar from '../WebComponent/Navbar';
import Newsletter from '../WebComponent/Newsletter';
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethod';
import { map } from '@firebase/util';
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
const Container = styled.div`

`;
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({ padding: "10px", flexDirection: "column" })};

`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
widht:100%;
height:90vh;
object-fit:cover;
padding:0px 50px;
${mobile({ height: "40vh" })};

`;
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
${mobile({ padding: "10px" })};

`;
const Title = styled.h1`
font-weight:200;

`;
const Desc = styled.p`
margin:20px 0px;
`;
const Price = styled.span`
font-weight:100;
font-size:40px;
`;

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;
${mobile({ width: "100%" })};

`;
const Filter = styled.div`
display:flex;
align-items:center;
`;
const FilterTitle = styled.span`
font-weight:200;
font-size:20px;

`;
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props => props.color};
margin:0px 5px;

`;

const FilterSize = styled.select`
margin-left:10px;
padding :5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
${mobile({ width: "100%" })};

`;
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;

`;
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;

`;

const Button = styled.button`
padding:15px;
border:1px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:#f8f4f4;
}
&:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const dispatch=useDispatch();



    useEffect(() => {
        console.log("hello this is product.jsx");
        const getProduct=async()=>{
            try{
                const res=await publicRequest.get(`/api/products/find/+${id}`);
                setProduct(res.data);
            }
            catch(e){}
        };
        getProduct();
    }, [id])
  
const handleQuantity=(type)=>{
    if(type==="dec"){
       quantity>1 && setQuantity(quantity-1);
    }
    else{
        setQuantity(quantity+1);
    }
};

const handleClick=()=>{
    //update cart
    dispatch(
    addProduct({...product,quantity,color,size}));
    
};

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.des} </Desc>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                              {product.size?.map((s) => (
                              <FilterSizeOption key={s}>{s}</FilterSizeOption>
                              ))}
                      </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />

        </Container>

    )
}

export default Product