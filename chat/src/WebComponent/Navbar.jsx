import React from 'react'
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { mobile } from "../responsive"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// creating own style component. instead of div.

const Container = styled.div`          /* This is nav bar outer layer */ 
 height :60px;
 ${'' /* ${mobile({backgroundColor:"gray"})} */}
 ${mobile({ height: "50px" })};


`
const Wrapper = styled.div`           /* navbar elements wrap  */
padding: 10px 20px;
display:flex;
justify-Content: space-between;
align-items:center;
${mobile({ padding: "10px 0px" })};

`
const Left = styled.div` flex:1;
display:flex;
align-items: center;
`;

const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({ display: "none" })};

;`

const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;

const Input = styled.input`
  border:none;
  ${mobile({ width: "50px" })};

`;

const Center = styled.div`flex:1;
text-align:center;
`;

const Logo = styled.h1`
 font-weight:bold;
 ${mobile({ fontSize: "24px" })};

`;
const Right = styled.div`flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ flex: 2, justifyContent: "center" })};


`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin:12px;
${mobile({ fontSize: "12px", marginLeft: "10px" })};

`;
const Navbar = () => {
    const quantity=useSelector(state=>state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>

                <Center><Logo>Paris.</Logo></Center>
                <Right>
                <Link to="/register">
                    <MenuItem>Register</MenuItem>
                    </Link>
                <Link to="/login">
                    <MenuItem>Sign in</MenuItem>
                    </Link>
                    <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar