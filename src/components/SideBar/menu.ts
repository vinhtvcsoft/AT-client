import { Menu as MenuAntd } from "antd";
import styled from "styled-components";

export const MenuCustom = styled(MenuAntd)`
  .ant-menu-item,
  .ant-menu-submenu-title {
    padding: 6px 16px !important;
    margin: 5px 0px 0px 0px !important;
    width: 100%;
    height: 38px;
    border-radius: 5px;
  }
  .ant-menu-title-content {
    color: #5f5f5f;
    letter-spacing: 0.5px;
    line-height: 22.5px;
    font-size: 15px;
    font-weight: 400;
    margin-left: 10px;
    margin-top: 5px;
  }
  .ant-menu-item-selected .ant-menu-title-content,
  .ant-menu-title-content:hover {
    color: #1677ff;
  }
  .ant-menu-submenu-title:hover {
    background-color: transparent !important;
  }
  .ant-menu-item-active,
  .ant-menu-item-selected {
    background-color: #e6f4ff !important;
  }
  .ant-menu-item-active .ant-menu-title-content,
  .ant-menu-item-active svg {
    color: #1677ff !important;
  }
  .ant-menu-submenu-active svg {
    color: #1677ff !important;
  }
  .ant-menu-submenu-active .ant-menu-submenu-arrow:before,
  .ant-menu-submenu-active .ant-menu-submenu-arrow:after {
    color: #1677ff !important;
  }
  .ant-menu-submenu-active {
    background-color: #e6f4ff !important;
  }
  .ant-menu-sub {
    background-color: white !important;
  }
  .ant-menu-submenu .ant-menu-item-active {
    background-color: white !important;
  }
  .ant-menu-submenu-open .ant-menu-submenu-title {
    background-color: #e6f4ff !important;
  }
  .ant-menu-submenu-open .ant-menu-submenu-title .ant-menu-title-content,
  .ant-menu-submenu-open svg {
    color: #1677ff !important;
  }
`;
