import React from "react";
import { auth } from "../firebase";

import FavouriteIcon from "../images/icons/favorite.svg";
import HeartIcon from "../images/icons/heart.svg";
import HomeIcon from "../images/icons/home.svg";
import MessageIcon from "../images/icons/message.svg";
import NotificationIcon from "../images/icons/notification.svg";
import ProfileIcon from "../images/icons/profile.svg";
import SettingsIcon from "../images/icons/setting.svg";
import WalletIcon from "../images/icons/wallet.svg";
import LogoutIcon from "../images/icons/logout.svg";

import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const navListData = [
  { icon: HomeIcon, text: "Home", href: "/dashboard" },
  { icon: NotificationIcon, text: "Notification", href: "/notification" },
  { icon: HeartIcon, text: "Shop", href: "/shop" },
  { icon: MessageIcon, text: "Conversation", href: "/conversation" },
  { icon: WalletIcon, text: "Wallet", href: "/wallet" },
  { icon: FavouriteIcon, text: "Subscription", href: "/subscription" },
  { icon: ProfileIcon, text: "My Profile", href: "/profile" },
  { icon: SettingsIcon, text: "Settings", href: "/settings" },
];

function Sidebar() {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await signOut(auth);
      localStorage.removeItem("token");
      console.log(res);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="z-10 justify-self-start bg-white rounded-[10px] flex flex-col justify-between max-h-[700px]">
      <ul className="py-10">
        {navListData.map(({ icon, text, href }, idx) => (
          <li key={idx}>
            <NavLink to={href} className="nav-btn">
              <img src={icon} alt={text} />
              <span>{text}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="text-[#88C2BB] flex items-center pb-10 pl-9 gap-[14px] font-semibold"
        onClick={logout}
      >
        <img src={LogoutIcon} alt={"logout"} />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Sidebar;
