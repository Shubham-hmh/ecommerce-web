
import styled from 'styled-components';
import {mobile} from '../responsive'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import{Link, Navigate} from 'react-router-dom';

const Container = styled.div`
width:100vw;
height:100vh;
background:url("https://pngimg.com/uploads/girls/girls_PNG6491.png");
background-repeat:no-repeat;
display:flex;
align-items:center;
justify-content:center;
background-size:contain;
${'' /* background-position:center; */}
`;

const Wrapper = styled.div`
width:25%;
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
flex-direction:column;
`;
const Input =styled.input`
flex:1;
min-width:40%;
margin:10px 0px ;
padding:10px;
`;

const Button =styled.button`
width:40%;
padding:15px 20px;
border:none;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
&:disabled{
  color:green;
  cursor:not-allowed;
}
&:active {
  background-color: black;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`;
const Linked=styled.a`
margin:5px 0px;
text-decoration:underline;
font-size:12px;
cursor:pointer;
`;

const Error=styled.span`
color:red;
`
const Login = () => {
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");
const dispatch =useDispatch();
const {isFeching,error}=useSelector((state)=>state.user);

const handleClick=async(e)=>{
  e.preventDefault();
  // login(dispatch,{username,password});
  const res=await fetch('/login',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },body:JSON.stringify({
      username,
      password
    })
  });
  const data =res.json();
  if(res.data ===400||!data){
    window.alert("invalid");
  }
  else{
    window.alert("login successful");
  }
}

  return (
    <Container className='con'>

      <Wrapper>
        <Title>Sign in</Title>
        <Form method="POST">
          <Input placeholder="username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
          <Input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
          <Button  onClick={handleClick} disabled={isFeching}>LOGIN</Button>
         { error &&<Error>Something went wrong....</Error>}
          <Linked>Don't remember the password ?</Linked>
          <Link to="/register">
          <Linked >Create a new Account</Linked>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login