import React from "react";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Admin Profile",
    path: "/stuMarkAdminprofile",
    icon: <ImIcons.ImProfile />,
    cName: "nav-text",
  },
  {
    title: "New Mark",
    path: "/addMark",
    icon: <AiIcons.AiOutlineFileAdd />,
    cName: "nav-text",
  },
  {
    title: "Manage Mark",
    path: "/viewMarks",
    icon: <AiIcons.AiOutlineFileDone />,
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
