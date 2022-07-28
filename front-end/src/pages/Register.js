import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import React, { useState } from 'react';
import axios from '../api/axios';
const { Option } = Select;

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
 const[email,setEmail]=useState("");
 const[password,setPassword]=useState("");
 const[address,setAddress]=useState("");
 const[phonenumber,setPhonenumber]=useState("");
 const[username,setUsername]=useState("");
  let item={email,password,address,phonenumber,username};
 const handleSubmit = (e) =>{
       e.preventDefaut();
       axios.post(`\register`,item);
 }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      scrollToFirstError
      style={{paddingRight: '300px',paddingTop:'200px'}}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input onChange={(e)=>setEmail( e.target.value)}  />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password onChange={(e)=>setPassword( e.target.value)}/>
      </Form.Item>
      <Form.Item
        name="username"
        label="User Name"
        rules={[
        
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input onChange={(e)=>setUsername( e.target.value)} />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
        
          {
            required: true,
            message: 'Please input your Address!',
          },
        ]}
      >
        <Input onChange={(e)=>setAddress( e.target.value)}/>
      </Form.Item>
      <Form.Item
        name="phonenumber"
        label="Phone Number"
        rules={[
        
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input onChange={(e)=>setPhonenumber( e.target.value)} />
      </Form.Item> 
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onChange={(e)=>handleSubmit(e)}>
             Register  
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;