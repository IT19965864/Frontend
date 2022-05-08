import React from "react";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Admin Profile",
    path: "/TeacherAdminProfile",
    icon: <ImIcons.ImProfile />,
    cName: "nav-text",
  },
  {
    title: "New Teacher",
    path: "/addTeacher",
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: "nav-text",
  },
  {
    title: "Manage Teacher",
    path: "/viewTeacher",
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
    path: "/login",
    icon: <MdIcons.MdLogout />,
    cName: "nav-text",
  },
];
