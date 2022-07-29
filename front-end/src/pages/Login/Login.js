import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { loginAPI } from "../../api/authenticate";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate ();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);

    const response = await loginAPI(values);
    console.log(response);
    if (response.status === "success") {
      <navigate to="/home" />;
    } else <navigate to="/login" />;
  };


  

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish }
      style={{ marginTop: "300px", width: 500, marginLeft: "600px" }}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={
            <UserOutlined
              className="site-form-item-icon"
              
            
            />
          }
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
         
        >
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;
