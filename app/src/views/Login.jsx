import React from "react";
import { Form, Input, Button, Col, Card, Typography } from "antd";
import HeaderHostel from "../common/HeaderHostel";
import FooterHostel from "../common/FooterHostel";

const Login = () => {
  return (
    <>
      <HeaderHostel />
      <center>
        <Card
          title={
            <center>
              <Typography.Title level={3} style={{ margin: "unset" }}>
                Hostel Complaint Portal Login
              </Typography.Title>
            </center>
          }
          style={{
            width: "500px",
            marginTop: "80px",
            boxShadow: "5px 5px #D3D3D3",
          }}
        >
          <Form>
            <Form.Item
              label="Smail:"
              name="smail"
              rules={[{ required: true }, { type: "email" }]}
            >
              <Input placeholder="Enter your smail ID" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <Form.Item>
              <Col>
                <Typography.Link href="/register">
                  New here? Click here to register
                </Typography.Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="primary" size="large">
                  Login
                </Button>
              </Col>
            </Form.Item>
          </Form>
        </Card>
      </center>
      <FooterHostel />
    </>
  );
};

export default Login;
