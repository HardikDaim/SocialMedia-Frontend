import React from "react";
import FriendListWidget from "./widgets/FriendsListWidget";
import UserWidget from "./widgets/UserWidget";
import { useSelector } from "react-redux";

export default function Info() {
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <div className="hidden lg:block">
      <aside
        id="separator-sidebar"
        className=" sticky top-0 overflow-y-auto shadow-lg border rounded-lg bg-white right-0 z-40 w-full h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-4 ">
            <li>
              <UserWidget userId={_id} picturePath={picturePath} />
            </li>
            <li>  <FriendListWidget userId={_id} /></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
