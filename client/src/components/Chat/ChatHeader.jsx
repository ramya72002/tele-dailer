import React from "react";
import Avatar from "../common/Avatar";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/i05";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
function ChatHeader() {
  const[{currentChatUser},dispatch]=useStateProvider();
return (
<div className="h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background">
<div className="flex items-center justify-center gap-6">
<Avatar type="sm" image={"/profile"} />
<div className="flex flex-col">
<span className="text-primary-strong">{currentChatUser?.name}</span>
<span className="text-secondary text-sm">online/offline</span>
</div>
</div>

<div className="flex gap-6">
  <MdCall className="text-panel-header-icon cursor-pointer text-x1"/>
  <IoVideocam className="text-panel-header-icon cursor-pointer text-x1"/>
<BiSearchAlt2 className="text-panel-header-icon cursor-point text-xl" onClick={()=>dispatch({type:reducerCases.SET_MESSAGE_SEARCH})}/>
<BsThreeDotsVertical className="text-panel-header-icon cursor-pointer text-xl"/>
</div>
</div>
);
}
export default ChatHeader;