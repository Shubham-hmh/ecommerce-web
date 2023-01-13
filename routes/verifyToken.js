
const jwt=require('jsonwebtoken');

// it is use while an user is already logged in and want to delete some post , so here is need of this user is valid or not.
//middleware helps to check user before deleted content.

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token;
    if(authHeader){
        const token=authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{      // after verification it moves on err or user

            if(err) res.status(403).json("token is not valid");
            req.user=user;
            next();

        });  

    }else{
        return res.status(401).json("you are not authenticated");
    }
    
}

const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id||req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("you are not allowed to do that !");
        }
        
    });
};

const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("you are not allowed to do that !");
        }
        
    });
};

module.exports={verifyToken,verifyTokenAndAuthorization ,verifyTokenAndAdmin}