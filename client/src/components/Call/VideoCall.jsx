import { useStateProvider } from "@/context/StateContext";
import React from "react";
const Container = dynamic(()=>import("./container"),{ssr:false})

function VideoCall() {
  const [{videoCall,socket,userInfo}] = useStateProvider()
  return <Container data={videoCall}/>;
}

export default VideoCall;
