import { useContext, useEffect } from "react";
import { getToken } from "../constant/Constant";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../context/Context";
export default function Auth({children})
{
   // const {account} = useContext(AccountContext)
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("hello")
        if(!getToken())
        {
            navigate("/")
        }
    },[getToken()])

    return(
        <>
        {children}
        </>
    )
}