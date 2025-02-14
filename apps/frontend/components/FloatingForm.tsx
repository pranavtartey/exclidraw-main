"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IconSquareX } from "@tabler/icons-react";
import axios from "axios";
import { HTTP_BACKEND } from "@/config";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

type FloatingFormProps = {
  isChalkClicked: boolean;
  setIsChalkClicked: Dispatch<SetStateAction<boolean>>;
};

const FloatingForm = ({
  isChalkClicked,
  setIsChalkClicked,
}: FloatingFormProps) => {
  const [name, setName] = useState<string>("");
  const [roomName, setRoomName] = useState<string>("");
  const router = useRouter();

  const createRoomHandler = async () => {
    try {
      const response = await axios.post(
        `${HTTP_BACKEND}/room`,
        { name },
        {
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        }
      );
      if (!response.data.roomId) {
        throw new Error(response.data.message);
      }
      setName("");
    } catch (e) {
      console.log(
        "Something went wrong in the createRoomHandler in FloatingForm component : ",
        e
      );
    }
  };

  const joinRoomHandler = async () => {
    try {
      const response = await axios.get(`${HTTP_BACKEND}/room/${roomName}`);
      if (response.data.room) {
        console.log(
          "This is the response from the joinRoomHandler : ",
          response.data.room
        );
        const { id } = response.data.room;
        router.push(`/canvas/${id}`);
        // router.push(`/canvas/signin`);
      }
      setRoomName("");
    } catch (err) {
      throw new Error(`Something went wrong in the joinRoomHandler : ${err}`);
    }
  };

  const nameChangeHandler: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setName(value);
  };
  const joinChangeHandler: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setRoomName(value);
  };

  return (
    <section className="bg-white rounded-lg">
      <div className="p-4">
        <IconSquareX
          color="black"
          onClick={() => {
            setIsChalkClicked(false);
          }}
        />
        <h2 className="text-black text-3xl">Dashboard</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={nameChangeHandler}
            placeholder="chat-room-1"
            className="bg-neutral-400 placeholder:text-neutral-300 rounded-lg focus:outline-none"
          />
          <div
            className="bg-green-500 w-fit p-1 rounded-full"
            onClick={createRoomHandler}
          >
            <IconPlus color="white" />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            value={roomName}
            onChange={joinChangeHandler}
            placeholder="Room-name"
            className="bg-neutral-400 placeholder:text-neutral-300 rounded-lg focus:outline-none"
          />
          <button
            className="bg-green-500 py-1 px-2 rounded-lg text-white"
            onClick={joinRoomHandler}
          >
            join
          </button>
        </div>
      </div>
    </section>
  );
};

export default FloatingForm;
