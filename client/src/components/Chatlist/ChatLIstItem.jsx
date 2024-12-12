import React from "react";
import Avatar from "../common/Avatar";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import MessageStatus from "../common/MessageStatus";
import { FaMicrophone } from "react-icons/fa";
import { FaCamera } from "react-icons/fa"; // Import FaCamera for image type messages

function ChatListItem({ data, isContactsPage = false }) {
  const [{ userInfo, currentChatUser }, dispatch] = useStateProvider();

  const handleContactClick = () => {
    // if(currentChatUser?.id === data?.id) {
    if (!isContactsPage) {
      dispatch({
        type: reducerCases.CHANGE_CURRENT_CHAT_USER,
        user: {
          name: data.name,
          about: data.about,
          profilePicture: data.profilePicture,
          email: data.email,
          id: userInfo.id === data.senderId ? data.recieverId : data.senderId,
        },
      });
    } else {
      dispatch({ type: reducerCases.CHANGE_CURRENT_CHAT_USER, user: { ...data } });
      dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE });
    }
    // }
  };

  return (
    <div
      className="flex cursor-pointer items-center hover:bg-background-default-hover"
      onClick={handleContactClick}
    >
      {/* Avatar Section */}
      <div className="min-w-fit px-5 pt-3 pb-1">
        <Avatar type="1g" image={data?.profilePicture} />
      </div>

      {/* Details Section */}
      <div className="min-h-full flex flex-col justify-center mt-3 pr-2 w-full">
        {/* Name Section */}
        <div className="flex justify-between">
          <div>
            <span className="text-white">{data?.name}</span>
          </div>

          {!isContactsPage && (
            <div>
              <span
                className={`${
                  data.totalUnreadMessages > 0 ? "text-icon-green" : "text-secondary"
                } text-sm`}
              >
                {calculateTime(data.createdAt)}
              </span>
            </div>
          )}
        </div>

        {/* About Section */}
        <div className="flex border-b border-conversation-border pb-2 pt-1 px-2">
          <div className="flex justify-between w-full">
            <span className="text-secondary line-clamp-1 text-sm">
              {isContactsPage ? (
                data?.about || "\u00A0"
              ) : (
                <div
                  className="flex items-center gap-1 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[200px] xl:max-w-[300px]"
                >
                  {data.senderId === userInfo.id && <MessageStatus messageStatus={data.messageStatus} />}
                  {data.type === "text" && <span className="truncate">{data.messageStatus}</span>}

                  {data.type === "audio" && (
                    <span className="flex gap-1 items-center">
                      <FaMicrophone className="text-panel-header-icon" />
                      Audio
                    </span>
                  )}

                  {data.type === "image" && (
                    <span className="flex gap-1 items-center">
                      <FaCamera className="text-panel-header-icon" />
                      Image
                    </span>
                  )}
                </div>
              )}
            </span>
            {data.totalUnreadMessages > 0 && (
              <span className="bg-icon-green px-[5px] rounded-full text-sm"> </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
