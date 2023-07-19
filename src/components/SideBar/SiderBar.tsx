/** @format */

import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { getItem, itemList } from './util';

const SiderBar = () => {
  const { Sider } = Layout;

  const insertChild = (menuItem: any[], childItem) => {
    menuItem?.forEach(item => {
      if (item?.opId === childItem.parent) {
        if (item.children === undefined) item.children = [];
        Array.isArray(item.children) &&
          item.children.push(
            getItem(childItem.label, childItem.key, null, undefined, childItem.opId),
          );
      } else {
        if (Array.isArray(item.children) && item.children.length > 0) {
          insertChild(item.children, childItem);
        }
      }
    });
  };

  const generateMenu = (operations: string | any) => {
    const menuItems: MenuProps['items'] = [];
    itemList.forEach(item => {
      const id = item.opId;
      if (operations && operations.length > id && operations[id] === 'Y') {
        if (!item.parent) {
          menuItems.push(getItem(item.label, item.key, item.icon, undefined, item.opId));
        } else {
          insertChild(menuItems, item);
        }
      }
    });
    return menuItems;
  };

  return (
    <Sider
      trigger={null}
      // collapsible
      // collapsed={collapsed}
      // className={styles.sider}
      width={240}
    >
      {/* <div className={styles.logo}>
          <img
            src="https://codervent.com/rocker/demo/vertical/assets/images/logo-icon.png"
            alt="logo"
            onClick={() => {
              setCollapsed(!collapsed)
            }}
          />
          {!collapsed && <span>Rocker</span>}

          {!collapsed ? (
            React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                style: {
                  position: "absolute",
                  right: 13,
                },
                onClick: () => setCollapsed(!collapsed),
              }
            )
          ) : (
            <></>
          )}
        </div> */}
      <Menu
        theme='light'
        mode='inline'
        items={generateMenu('YYYYYYYY')}
        // className={styles.menu}
        // onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
};

export default SiderBar;
