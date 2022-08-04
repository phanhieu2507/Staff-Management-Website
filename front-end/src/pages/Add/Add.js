import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { registerAPI } from "../../api/authenticate";
import { useNavigate } from "react-router-dom";

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
  const navigate=useNavigate();
  const onFinish = async (values) => {
   
    await registerAPI(values);
   
    console.log("Received values of form: ", values);
 
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      style={{  paddingTop: "200px",marginRight: "600px",marginLeft: "300px"  }}
    >  
    <h1 style={{ marginLeft: "220px"}}>Add</h1>
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
        <Button style={{
          padding: "0 55px",
        }} type="primary" htmlType="submit">
          Add staff
        </Button>
        <br/>
       <div style={{ paddingTop:"20px" }} > <Button type="primary" style={{
          padding: "0 50px",
        }} onClick={()=>{navigate("/home")}}>
          Back to list
        </Button></div>
      </Form.Item>
    </Form>
  );
};

export default Add;
