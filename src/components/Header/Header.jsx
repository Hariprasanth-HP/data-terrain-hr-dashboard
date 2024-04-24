import React from "react";
import "./Header.css";
import talent_log from "../../assets/talent-logo.svg";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  return (
    <div className="header_container">
      <div>
        <img className="header_logo" src={talent_log} alt="" />
      </div>
      <div
        style={{
          width: "58%",
        }}
      >
        <div className="search-box">
          <input type="search" placeholder="Search" />
          <i className="fa fa-search fa-lg"></i>
        </div>
      </div>
      <div className="header-icons">
        <WbSunnyIcon />
        <ChatOutlinedIcon />
        <NotificationsOutlinedIcon />
        <SettingsSuggestOutlinedIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Header;
