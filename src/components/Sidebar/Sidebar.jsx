import React from "react";
import "./Sidebar.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <WbSunnyIcon />
      <ChatOutlinedIcon />
      <NotificationsOutlinedIcon />
      <SettingsSuggestOutlinedIcon />
      <AccountCircleIcon />
    </div>
  );
};

export default Sidebar;
