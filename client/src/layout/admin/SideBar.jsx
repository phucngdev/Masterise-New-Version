import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  EditOutlined,
  FormOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <>
      <NavLink to="/admin" className="text-black bg-transparent">
        Dashboard
      </NavLink>
    </>,
    "1",
    <AppstoreOutlined />
  ),
  getItem("Posts", "sub1", <FormOutlined />, [
    getItem(
      <NavLink to="/admin/posts-list" className="text-black bg-transparent">
        Posts List
      </NavLink>,
      "2",
      <ContainerOutlined />
    ),
    getItem(
      <NavLink to="/admin/create-post" className="text-black bg-transparent">
        Create Post
      </NavLink>,
      "3",
      <EditOutlined />
    ),
  ]),
  getItem("Buys", "sub2", <FormOutlined />, [
    getItem(
      <NavLink to="/admin/buy-list" className="text-black bg-transparent">
        List
      </NavLink>,
      "4",
      <ContainerOutlined />
    ),
    getItem(
      <NavLink to="/admin/create-buy" className="text-black bg-transparent">
        Add New
      </NavLink>,
      "5",
      <EditOutlined />
    ),
  ]),
  getItem("Rent", "sub3", <FormOutlined />, [
    getItem(
      <NavLink to="/apartment-list" className="text-black bg-transparent">
        Apartment List
      </NavLink>,
      "6",
      <ContainerOutlined />
    ),
    getItem(
      <NavLink to="/add-new-apartments" className="text-black bg-transparent">
        Add New Apartments
      </NavLink>,
      "7",
      <EditOutlined />
    ),
  ]),
];
const onClick = (e) => {
  console.log("click ", e);
};
const SideBar = () => {
  return (
    <>
      <Menu
        className="fixed top-[56px] left-0 py-5 w-[256px] h-[100vh] "
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SideBar;
