import React from "react";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Admin Profile",
    path: "/stuAdminprofile",
    icon: <ImIcons.ImProfile />,
    cName: "nav-text",
  },
  {
    title: "New Timetable",
    path: "/addTimetable",
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: "nav-text",
  },
  {
    title: "Manage Table",
    path: "/viewTimetable",
    icon: <MdIcons.MdOutlineManageAccounts />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/resetPassword",
    icon: <AiIcons.AiOutlineSetting />,
    cName: "nav-text",
  },

  {
    title: "Logout",
    path: "/",
    icon: <MdIcons.MdLogout />,
    cName: "nav-text",
  },
];
