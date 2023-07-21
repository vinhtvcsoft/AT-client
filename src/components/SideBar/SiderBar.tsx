/** @format */

import React, { memo, useState } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { getItem, itemList } from "./util";
import { logoAT } from "../../asset/images";
import { ArrowLeftBar } from "../../asset/icons";
import createStyle from "./styles";
import { MenuCustom } from "./menu";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "routes/data";

const SiderBar = () => {
  const { styles } = createStyle();
  const { Sider } = Layout;

  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const [collapsed, setCollapsed] = useState(false);

  const insertChild = (menuItem: any[], childItem) => {
    menuItem?.forEach((item) => {
      if (item?.opId === childItem.parent) {
        if (item.children === undefined) item.children = [];
        Array.isArray(item.children) &&
          item.children.push(
            getItem(
              childItem.label,
              childItem.key,
              null,
              undefined,
              childItem.opId
            )
          );
      } else {
        if (Array.isArray(item.children) && item.children.length > 0) {
          insertChild(item.children, childItem);
        }
      }
    });
  };

  const generateMenu = (operations: string | any) => {
    const menuItems: MenuProps["items"] = [];
    itemList.forEach((item) => {
      const id = item.opId;
      if (operations && operations.length > id && operations[id] === "Y") {
        if (!item.parent) {
          menuItems.push(
            getItem(item.label, item.key, item.icon, undefined, item.opId)
          );
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
      width={250}
      className={styles.sidebarWrapper}
      collapsible
      collapsed={collapsed}>
      <div className={styles.logoArea}>
        <img
          onClick={() => {
            if (collapsed) {
              const rightLayout = document.getElementById("rightLayout");
              rightLayout?.style.setProperty("margin-left", "250px");
              setCollapsed(!collapsed);
            }
          }}
          height={42}
          src={logoAT}></img>
        {!collapsed && (
          <ArrowLeftBar
            onClick={() => {
              const rightLayout = document.getElementById("rightLayout");
              rightLayout?.style.setProperty("margin-left", "80px");
              setCollapsed(!collapsed);
            }}
          />
        )}
      </div>
      <MenuCustom
        style={{ padding: "10px" }}
        theme="light"
        mode="inline"
        // defaultSelectedKeys={[ROUTES.HOME]}
        items={generateMenu(
          "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY"
        )}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
};

export default memo(SiderBar);
