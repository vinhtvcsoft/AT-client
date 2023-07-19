/** @format */

import React from "react";
import { Col, Row, Typography, Space, Form, Button, Checkbox } from "antd";
import { InputCus } from "components";
import { logoAT } from "../../asset/images";
import { getClientHeight } from "utils";
import { useUser } from "hooks/useUser";

const Login = () => {
  const { Text } = Typography;
  const { login } = useUser();
  const clientHeight = getClientHeight();

  const [form] = Form.useForm();

  const handleSubmit = (values: object) => {
    login(values);
  };

  return (
    <div>
      <Row style={{ height: `${clientHeight}px` }}>
        <Col span={12}>
          <Space align="center" style={{ height: "100%" }}>
            <img
              src={
                "https://codervent.com/rocker/demo/vertical/assets/images/login-images/login-cover.svg"
              }
              width="650"
            />
          </Space>
        </Col>
        <Col span={12}>
          <Space
            direction="vertical"
            align="center"
            style={{
              width: "100%",
              height: "100%",
              paddingTop: 96,
              backgroundColor: "white",
            }}>
            <img style={{ width: "225px", height: "64px" }} src={logoAT}></img>

            <Form
              layout="vertical"
              id="login_form"
              onFinish={handleSubmit}
              style={{ width: "350px", marginTop: "36px" }}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "33px",
                }}>
                Đăng Nhập
              </Text>
              <InputCus label={"Tên đăng nhập"} name={"operatorid"} />
              <InputCus
                label={"Mật khẩu"}
                type={"password"}
                name={"password"}
              />
              <Row>
                <Col span={18}>
                  <Checkbox>Nhớ mật khẩu?</Checkbox>
                </Col>
                <Col span={6}>
                  <Text>Quên mật khẩu</Text>
                </Col>
              </Row>
              <Button
                style={{ width: "100%" }}
                htmlType="submit"
                form="login_form">
                Đăng nhập
              </Button>
            </Form>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
