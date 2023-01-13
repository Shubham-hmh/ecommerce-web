
import styled from 'styled-components';
import Announcement from '../WebComponent/Announcement';
import Footer from '../WebComponent/Footer';
import Navbar from '../WebComponent/Navbar';
import Newsletter from '../WebComponent/Newsletter';
import Products from '../WebComponent/Products';
import { mobile } from "../responsive"
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div``;
const Title = styled.h1`
margin:20px;
`;
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;

`;
const Filter = styled.div`
margin:20px;
${mobile({ width: "0px 20px ", display: "flex", flexDirection: "column" })};


`;

const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px
${mobile({ marginRight: "0px" })};


`;
const Select = styled.select`
padding:10px;
margin-right:20px;
${mobile({ margin: "10px 0px" })};

`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort,setSort]=useState();
    const handleFilters = (e) => {
        const value = e.target.value;  // getting value of select.

        setFilters({
            ...filters,
            [e.target.name]: value.toLowerCase()
        });
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                        <Option>Pink</Option>
                        <Option>Black</Option>

                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >
                            Size
                        </Option>
                        <Option>XL</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XS</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e)=>setSort(e.target.value)}>
                        <Option value="newest" selected>
                            Newest
                        </Option>
                        <Option value="asc" >Price(asc)</Option>
                        <Option value="desc" >Price(desc)</Option>
                    </Select>
                </Filter>

            </FilterContainer>
            <Products cat={cat} filters={filters}  sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList