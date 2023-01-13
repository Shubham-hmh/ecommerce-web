
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';

import {mobile} from '../responsive'
const Container = styled.div`
width:100vw;
height:100vh;
background:url("https://pngimg.com/uploads/girls/girls_PNG6491.png");
background-repeat:no-repeat;
display:flex;
align-items:center;
justify-content:center;
background-size:contain;
`;
const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;
${mobile({width:"75%"})};

`;
const Title =styled.h1`
font-size:24px;
font-weight:300;
`;
const Form =styled.form`
display:flex;
flex-wrap:wrap;

`;
const Input =styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px ;
padding:10px;
`;
const Agreement =styled.span`
font-size:12px;
margin:20px 0px;
`;
const Button =styled.button`
width:40%;
padding:15px 20px;
border:none;
background-color:teal;
color:white;
cursor:pointer;
&:active {
  background-color: black;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`;

//Frontend to backend data ------->
const Register = () => {
    const navigate = useNavigate();

    // save input fields in form of objects .
    const[user,setUser]=useState({
        username:"",lastname:"",phone:"",email:"",password:"",cpassword:""
    });

    let name,value;
    const handleInputs=(e)=>{

        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});

    }

const PostData=async(e)=>{
    console.log("hi");
     e.preventDefault();
     //object destructuring like user.name=value // which is entered by user.
     const { username,lastname,phone ,email ,password ,cpassword}=user;

     const res=await fetch("/api/auth/register",{
        
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username,lastname,phone ,email ,password ,cpassword
             
        })
     });
     const data=await res.json();
     if(!data){
        window.alert("invalid Registration");
        console.log("invalid registration");
     }
     else{
        window.alert("Registration");
        console.log("success registration");
        navigate('/login');
     }

}
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form method='post'>
                    <Input type="text" name="username" id="username" value={user.username} onChange={handleInputs} placeholder="name" />
                    <Input type="text" name="lastname" id="lastname" value={user.lastname} onChange={handleInputs} placeholder="last name" />
                    <Input type="number" name="phone" id="phone" value={user.phone} onChange={handleInputs} placeholder="phone"  />
                    <Input type="email" name="email" id="email" value={user.email} onChange={handleInputs} placeholder="email" />
                    <Input type="password" name="password" id="password" value={user.password} onChange={handleInputs} placeholder="password" />
                    <Input type="password" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="confirm password" />
                    <Agreement>
                        By creating an account ,I consent to the processing of my personal data in accordance with <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={PostData}>CREATE</Button>
             
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register