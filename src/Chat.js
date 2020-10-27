import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";

function Chat() {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed >>>", input);

    setInput("");
  };

  const { roomId } = useParams();

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://lh3.googleusercontent.com/ru7FaiogMmhzFtUE48jW3VHjBKjLNtvMLUdpuP47oJwwtHrYR8GOsS2SxC7fJq1Pauw_a9w=s85" />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>last seen at</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Hanbal Ahmed</span>
          hanbal
          <span className="chat__timestamp">2:25 PM</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send Message
          </button>
        </form>

        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
