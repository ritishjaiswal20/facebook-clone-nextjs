import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatIcon,
  CheveronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
// import { signOut,useSession } from "next-auth/client";
import HeaderIcon from "./HeaderIcon";
function Header() {
  // const [session] = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6  text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 item-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="search facebook"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          // onClick={signOut}
          // src={session.user.image}
          src="https://links.papareact.com/5me"
          height="40"
          width="40"
          layout="fixed"
        />
        <p className="whitespace-nowrap font-semibold pr-3">Ritish jaiswal</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
