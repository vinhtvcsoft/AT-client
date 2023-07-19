/** @format */
import React from 'react';
import type { MenuProps } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { ROUTES } from 'routes/data';
import { EmptyPage } from 'pages';

type MenuItem = Required<MenuProps>['items'][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  opId?: number,
  type?: 'group',
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
export const itemList = [
  {
    id: 0,
    label: 'Home',
    key: ROUTES.HOME,
    icon: <HomeOutlined />,
    opId: 0,
    parent: 0,
  },
  {
    id: 0,
    label: 'Tài khoản',
    key: ROUTES.HOME,
    icon: <UserOutlined />,
    opId: 0,
    parent: 0,
  },
];
