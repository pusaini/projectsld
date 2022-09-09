import { useEffect, useState } from "react";
import { AccountContext } from "./Context";
import { getToken,getStorageData } from "../constant/Constant";
export default function ContextState({children})
{
    const [account,setAccount] = useState({});
    useEffect(()=>{
        if(getToken()){
            setAccount({...account,...getStorageData()})
        }
    },[])
    function setAccountInfo(loginData){
       
        setAccount({...account,...loginData})
    }
    return(
        <AccountContext.Provider value={{accountData:account,loginFun:setAccountInfo}}>
            {children}
        </AccountContext.Provider>
    )
}