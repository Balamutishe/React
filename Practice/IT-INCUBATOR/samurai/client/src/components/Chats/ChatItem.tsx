import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { Link } from "react-router";

import { TChat } from "../../api/chats/types.ts";
import userImg from "../../assets/149071.png";
import c from "./Chats.module.css";

export type TChatItemProps = {
  chat: TChat;
  deleteChat: UseMutationResult<string, Error, string, unknown>;
};

export const ChatItem: FC<TChatItemProps> = ({ chat, deleteChat }) => {
  return (
    <div className={c.chat}>
      <img src={userImg} alt={userImg} className={c.chatImg} />
      <Link to={`/dialogs/${chat._id}`} className={c.chatTitle}>
        {chat.chatText}
      </Link>
      <button
        onClick={() => deleteChat.mutate(chat._id)}
        disabled={deleteChat.isPending}
      >
        X
      </button>
    </div>
  );
};
