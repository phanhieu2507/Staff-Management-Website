import { Button, Form, Input } from "antd";
import React, { useState,useEffect } from "react";
import { registerAPI } from "../../api/authenticate";
import { useNavigate ,useParams} from "react-router-dom";
import axios from "../../api/axios";
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
const Profile = () => {
  const [form] = Form.useForm();
  const onFinish = async () => {
  };
  const [data, setData] = useState([]);
  useEffect(async () => {
      setData(JSON.parse(localStorage.getItem('userData')).user);
  }, []);
  console.log(data);
  React.useEffect(() => {
    form.setFieldsValue({
        username:data.username ,
         email: data.email,
        phonenumber: data.phonenumber,
         address:data.address,
        
     });
   }, [data]);
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      style={{  paddingTop: "200px",marginRight: "600px",marginLeft: "300px"  }}
    >  
    <h1 style={{ marginLeft: "220px"}}>Profile</h1>
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
        name="username"
        label="User Name"
        rules={[
          {
            required: true,
            message: "Please input your Name!",
          },
        ]}
      >
        <Input/>
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
       <a href={`/home`}> <Button type="primary">
        Back
        </Button></a>
      </Form.Item>
    </Form>
  );
};

export default Profile;
