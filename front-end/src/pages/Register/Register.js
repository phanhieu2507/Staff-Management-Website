import { Button, Form, Input, notification } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { registerAPI } from "../../api/authenticate";
import { useNavigate } from "react-router-dom";
import BackGround from "../../components/BackGround";
import "./Register.css";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    notification.open({
      message: "Your registration has been successfully completed",
      icon: (
        <CheckOutlined
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
    await registerAPI(values);
    console.log("Received values of form: ", values);
    navigate("/login");
  };
  return (
    <div>
      <BackGround />
      <div className="register-body">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          style={{ minWidth: "400px" }}
        >
          <h1 style={{ marginLeft: "32px" }}>Register</h1>
          <hr style={{ margin: "10px 30px 20px 35px" }} />
          <div style={{ marginLeft: "50px", marginRight: "-100px" }}>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input placeholder="User Name" />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your Address!",
                },
              ]}
            >
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item
              name="phonenumber"
              rules={[
                {
                  required: true,
                  message: "Please input your PhoneNumber!",
                },
              ]}
            >
              <Input placeholder="Phonenumber" />
            </Form.Item>
          </div>
          <Form.Item {...tailFormItemLayout}>
            <div style={{ marginLeft: "-40px" }}>
              {" "}
              Already have an account? <a href="/login">Log In </a>now!
            </div>

            <div style={{ paddingLeft: "20px" }}>
              {" "}
              <br />
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
