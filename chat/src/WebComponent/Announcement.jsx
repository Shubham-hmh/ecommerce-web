import styled from "styled-components";

const Container = styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
font-size:16px;
font-family:sans-serif;
`;

const Announcement = () => {
    return (
        <Container>
            Get 50% off on every order before 26 october.
        </Container>
    )
}

export default Announcement