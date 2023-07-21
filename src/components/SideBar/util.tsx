/** @format */
import React from "react";
import type { MenuProps } from "antd";
import {
  BankOutlined,
  HomeOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { ROUTES } from "routes/data";
import { EmptyPage } from "pages";

type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  opId?: number,
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    opId,
    type,
  } as MenuItem;
}

const iconSize = 20;
export const itemList = [
  {
    id: 0,
    label: "Home",
    key: ROUTES.HOME,
    icon: <HomeOutlined style={{ fontSize: `${iconSize}px` }} />,
    opId: 0,
    parent: 0,
  },
  {
    id: 4,
    label: "Quản lý Căn hộ",
    key: "PropertyGroup",
    icon: <BankOutlined style={{ fontSize: `${iconSize}px` }} />,
    opId: 4,
    parent: 0,
  },
  {
    id: 5,
    label: "Căn hộ của tôi",
    key: ROUTES.MY_PROPERTY,
    opId: 5,
    parent: 4,
  },
  {
    id: 6,
    label: "Danh sách căn hộ",
    key: "PropertList",
    // icon: <UserOutlined style={{ fontSize: `${iconSize}px` }} />,
    opId: 6,
    parent: 4,
  },
  {
    id: 7,
    label: "Quản lý khách hàng",
    key: "CustomerGroup",
    icon: <CustomerServiceOutlined style={{ fontSize: `${iconSize}px` }} />,
    opId: 7,
    parent: 0,
  },
  {
    id: 8,
    label: "Khách hàng của tôi",
    key: "MyCustomer",
    opId: 8,
    parent: 7,
  },
  {
    id: 9,
    label: "Danh sách khách hàng",
    key: "CutomerList",
    opId: 9,
    parent: 7,
  },
  {
    id: 10,
    label: "Cấu hình chung",
    key: "CommonSetup",
    icon: <UnorderedListOutlined style={{ fontSize: `${iconSize}px` }} />,
    opId: 10,
    parent: 0,
  },
  {
    id: 11,
    label: "Danh sách Dự án",
    key: "CDY_PPT",
    opId: 11,
    parent: 10,
  },
  {
    id: 12,
    label: "Danh sách Quận/Huyện",
    key: "CDY_DISTRICT",
    opId: 12,
    parent: 10,
  },
  {
    id: 12,
    label: "Danh sách Tỉnh/Thành",
    key: "CDY_CITY",
    opId: 12,
    parent: 10,
  },
  {
    id: 1,
    label: "Quản lý tài khoản",
    key: "UserGroup",
    icon: <UserOutlined style={{ fontSize: `${iconSize}px` }} />,
    opId: 1,
    parent: 0,
  },
  {
    id: 2,
    label: "Tài khoản",
    key: "User",
    // icon: <UserOutlined style={{ fontSize: `${iconSize}px` }} />,
    opId: 2,
    parent: 1,
  },
  {
    id: 3,
    label: "Nhóm tài khoản",
    key: "Role",
    // icon: <UserOutlined style={{ fontSize: `${iconSize}px` }} />,
    opId: 3,
    parent: 1,
  },
];
