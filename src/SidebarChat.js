import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase";

function SidebarChat({ id, name, addNewChat }) {
  const createChat = () => {
    const roomName = prompt("Enter Chat Name");

    if (roomName) {
      // database
      db.collecion("rooms");
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src="https://lh3.googleusercontent.com/ru7FaiogMmhzFtUE48jW3VHjBKjLNtvMLUdpuP47oJwwtHrYR8GOsS2SxC7fJq1Pauw_a9w=s85" />

      {/* gghyu gghyuhyuycddfdtg */}

      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat" id="app">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
