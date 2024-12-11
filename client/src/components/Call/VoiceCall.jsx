import React from "react";
const Container = dynamic(()=>import("./container"),{ssr:false});

function VoiceCall() {
  return <div>VoiceCall</div>;
}

export default VoiceCall;
