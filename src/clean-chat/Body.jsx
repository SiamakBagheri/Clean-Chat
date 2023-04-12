import React from "react";
import Chat from "./Chat";

function Body(props) {
  const chats = props.chatslist.map((chat, index) => {
    const isLeft = "recive" === chat.type;
    return (
      <Chat
        key={index}
        isLeft={isLeft}
        time={chat.time}
        message={chat.message}
        gravatar={isLeft ? props.gravatar.avatar2 : props.gravatar.avatar1}
      />
    );
  });

  return (
    <div className="panel-body" style={{height: "80vh", overflowY: "auto" }}>
      <div className="chats">{chats}</div>
    </div>
  );
}

export default Body;
