import styled from "styled-components";
import {mobile} from "../responsive"
import { Link } from "react-router-dom";
const Container =styled.div`
flex:1;
margin:3px;     
height:70vh;    /* this is css for center images according to container with same size; w100 and h100*/
position:relative;
${mobile({height:"30vh"})};

`;

const Image =styled.img`
width:100%;
height:100%;
object-fit:cover;
`;
const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title=styled.h1`
color:white;
margin-bottom:20px;
`;
const Button=styled.button`
border:none;
background-color:white;
color:gray;
cursor:pointer;
padding:10px;
font-weight:600;
&:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

`;

const CategorieItem = ({item}) => {
  return (
    <Container>
<Link to ={`/products/${item.cat}`}>
       <Image src={item.img}/>
       <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
       </Info>
</Link>
    </Container>

    )
}

export default CategorieItem