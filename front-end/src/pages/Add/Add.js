import { Button, Form, Input,notification } from "antd";
import React, { useState } from "react";
import { registerAPI } from "../../api/authenticate";
import { useNavigate } from "react-router-dom";
import {ArrowLeftOutlined,CheckOutlined} from '@ant-design/icons'
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
const Add = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    await registerAPI(values);
    notification.open({
      message: 'Staff Added',
      icon: (
        <CheckOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });

    form.setFieldsValue({
      username: "",
      email: "",
      phonenumber: "",
      address: "",
      password: "",
    });
  };
  return (
    <>
     <ArrowLeftOutlined className="back-button" style={{ fontSize: '30px',width:'50px'}} onClick={() => {
      navigate(`/home`)
      window.location.reload()
    }
      } />
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      style={{ paddingTop: "100px", marginRight: "500px", marginLeft: "400px" }}
    >
      <h1 style={{ marginLeft: "220px" }}>ADD STAFF</h1>
      <Form.Item
        name="email"
        label="E-mail"
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
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="username"
        label="User Name"
        rules={[
          {
            required: true,
            message: "Please input your Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: "Please input your Address!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phonenumber"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your PhoneNumber!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          style={{
            padding: "0 55px",
          }}
          type="primary"
          htmlType="submit"
        >
          Add Staff
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default Add;
