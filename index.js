

//for packet.json use----> npm init -y

const express =require("express");
const app =express();
const mongoose=require("mongoose");
const dotenv=require('dotenv');   // for security key.
const userRoute=require('./routes/user');
const authRoute=require('./routes/auth');
const productRoute=require('./routes/product');
const cartRoute=require('./routes/cart');
const orderRoute=require('./routes/order');
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const path =require("path");

dotenv.config();

//it just a promise means it may be successful or fail.

mongoose.connect(process.env.MONGO_URL)   // it give promises.
.then(function(db){                    
    console.log("Database connected")
})
.catch(function(err){
    console.log(err);
});

//for creating api , making end points .
// app.get("/api/test",()=>{                // instead of doing this we follow below method.
//     console.log("test is successful");
// });

app.use(express.json());
app.use(cors());     
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout", stripeRoute);

//static files
app.use(express.static(path.join(__dirname,'./chat/build')));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./chat/build/index.html'));
});



app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running .");
});
