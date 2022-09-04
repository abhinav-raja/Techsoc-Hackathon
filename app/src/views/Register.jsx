import React from "react";
import { Form, Input, Button, Col, Card, Typography } from "antd";
import HeaderHostel from "../common/HeaderHostel";

const Register = () => {
  const [form] = useForm();
  //Api url
  const api = "";
  const createUser = ()=>{
    const content = {
      //email: this.formRef.current.getFieldValue,
      password: "",
      role: ""
    };
    console.log(form.getFieldsValue());
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    };
    fetch(api, requestOptions)
  }

  return (
    <>
      <HeaderHostel />
      <center>
        <Card
          title={
            <center>
              <Typography.Title level={3} style={{ margin: "unset" }}>
                Hostel Complaint Portal Registeration
              </Typography.Title>
            </center>
          }
          style={{
            width: "500px",
            marginTop: "80px",
            boxShadow: "5px 5px #D3D3D3",
          }}
        >
          <Form form={form}>
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
              <Input.Password placeholder="Create new password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" onClick = {createUser()}>
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </center>
    </>
  );
};

export default Register;
