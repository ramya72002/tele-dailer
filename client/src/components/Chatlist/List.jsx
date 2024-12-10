import React, { useEffect } from "react";
import axios from "axios";
import { GET_INITIAL_CONTACTS_ROUTE } from "axios";
import { useStateProvider } from "@/context/StateContext";

function List() {
  const [{ userInfo, userContacts }, dispatch] = useStateProvider();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const {
          data: { users, onlineUsers },
        } = await axios.get(`${GET_INITIAL_CONTACTS_ROUTE}/${userInfo.id}`);
        
        // Dispatch data to state if needed
        // dispatch({ type: "SET_CONTACTS", payload: { users, onlineUsers } });
      } catch (err) {
        console.error(err);
      }
    };

    if (userInfo?.id) {
      getContacts();
    }
  }, [userInfo]);

  return (
    <div className="bg-search-input-container-background flex-auto overflow-auto max-h-full custom-scrollbar">
      {/* Add content here if needed */}
    </div>
  );
}

export default List;
