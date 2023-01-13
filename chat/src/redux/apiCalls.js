
import { loginFailure,loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../requestMethod";

export const login =async(dispatch,user)=>{
    console.log("h");
    dispatch(loginStart());
    try{
        const res=await publicRequest.post("/login",user);

        dispatch(loginSuccess(res.data));

    }
    catch(err){
        console.log("fail");
        dispatch(loginFailure());
    }
}