"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

const ChatRoomClient = ({
  messages, //all messages of 1
  id, //1
}: {
  messages: { message: string }[];
  id: string;
}) => {
  const [chats, setChats] = useState(messages);
  const [currentMessage, setCurentMessage] = useState("");
  const { socket, loading } = useSocket();

  useEffect(() => {
    if (socket && !loading) {
      socket.send(
        JSON.stringify({
          type: "join_room",
          roomId: id,
        })
      );

      socket.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        if (parsedData.type === "chat") {
          setChats((c) => [...c, {message : parsedData.message}]);
        }
      };
    }
  }, [socket, loading, id]);

  return (
    <div>
      {chats.map((m, idx) => (
        <div key={idx}>{m.message}</div>
      ))}

      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurentMessage(e.target.value)}
      />
      <button
        onClick={() => {
          socket?.send(
            JSON.stringify({
              type: "chat",
              roomId: id,
              message: currentMessage,
            })
          );
          setCurentMessage("");
        }}
      >
        Send message
      </button>
    </div>
  );
};

export default ChatRoomClient;
