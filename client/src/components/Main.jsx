import React, { useEffect,useState } from "react";
import ChatList from "./Chatlist/ChatList";
import Empty from "./Empty";
import {onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { CHECK_USER_ROUTE } from "@/ptils/ApiRoutes";
import axios from "axios";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import Chat from "./Chat/Chat";
import { GET_MESSAGES_ROUTE } from "@/utils/ApiRoutes";

function Main() {
const router = useRouter()
const [{userInfo,currentUser},dispatch]=useStateProvider();
const [redirectLogin, setRedirectLogin] = useState(false);

useEffect(()=>{
  if(redirectLogin) router.push("/login");
},[redirectLogin]);


onAuthStateChanged(firebaseAuth, async (currentUser) => {
  if (!currentUser) setRedirectLogin(true);
    if(!userInfo && currentUser?.email) {
    const {data} = await axios.post(CHECK_USER_ROUTE, {
      email: currentUser.email})
    }
    if(!data.status) {
    router.push("/login")
    }
    if(data?.data){
    const {id,name,email,profilePicture:profileImage,status}=data.data;

    dispatch({
      type:reducerCases.SET_USER_INFO,
      userInfo:{
        id,name,email,profileImage,status,

      },
    });
  }
});

useEffect(()=>{
  const getMessages=async()=>{
    const {data:{messages}}=await  axios.get(`
      ${GET_MESSAGES_ROUTE}/${userInfo.id}/${currentChatUser.id}`
    );
    dispatch({type:reducerCases.SET_MESSAGES,messages});
  }
  if(currentChatUser?.id){
    getMessages();

  }
},[currentChatUser])

return(
  <>
<div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden">
    <ChatList />
    {
      currentUser?<Chat />:<Empty/>
    }
    </div>
</>
);
}
export default Main;