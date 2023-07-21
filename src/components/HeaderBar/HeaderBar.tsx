/** @format */

import React, { useState } from "react";
import { Layout, Input, Button, Space, Typography, Divider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import { DarkModeIcon, BellIcon } from "../../asset/icons";
import { IConButton } from "components";
import styled from "styled-components";
import createStyle from "./styles";

const HeaderBar: React.FC = () => {
  const { styles } = createStyle();
  const { Header } = Layout;
  const { Text } = Typography;
  const SearchField = styled(Input)`
    .ant-input {
      background-color: #f7f7ff;
      border-color: #f7f7ff;
    }
  `;

  return (
    <Header className={styles.headerBar}>
      <div style={{ height: "60px", padding: "0px 24px" }}>
        <SearchField
          prefix={<SearchOutlined />}
          style={{
            width: "366px",
            height: "36px",
            margin: "12px 0px",
            position: "absolute",
            backgroundColor: "#f7f7ff",
            borderColor: "#f7f7ff",
          }}
          placeholder={"Tìm kiếm"}
        />
        <Space
          direction="horizontal"
          style={{
            right: 0,
            position: "fixed",
            paddingTop: "8px",
            paddingBottom: "8px",
            height: "60px",
            marginRight: "24px",
          }}>
          <IConButton sx={{ top: "4px" }} iconType={"DARK_MODE"} />
          <IConButton sx={{ top: "4px" }} iconType={"BELL"} />
          <Space
            onClick={() => {
              console.log(">>>Click ne");
            }}
            direction="horizontal"
            style={{
              width: "210px",
              height: "60px",
              borderLeft: "1px solid #f0f0f0",
              borderRight: "1px solid #f0f0f0",
              display: "flex",
              padding: "8px 16px",
              zIndex: 15,
              cursor: "pointer",
            }}>
            <div
              style={{
                height: "42px",
                display: "grid",
              }}>
              <img width={42} height={42}></img>
            </div>
            <div
              style={{
                height: "44px",
                display: "grid",
                marginLeft: "8px",
              }}>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#413c3c",
                  lineHeight: "22.5px",
                  letterSpacing: "0.5px",
                }}>
                Phạm Hữu Vinh
              </Text>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#747474",
                  fontWeight: 400,
                  lineHeight: "19.5px",
                  letterSpacing: "0.5px",
                }}>
                Administrator
              </Text>
            </div>
          </Space>
        </Space>
      </div>
    </Header>
  );
};

export default HeaderBar;
