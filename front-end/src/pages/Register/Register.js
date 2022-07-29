import {
  Button,
  Form,
  Input,
} from 'antd';
import React, { useState } from 'react';
import { registerAPI } from '../../api/authenticate';

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
 const[userInfor,setuserInfor]= useState({
        username: "",
        email: "",
        password: "",
        phonenumber: "",
        address: "",
 })
  
 const handleSubmit = async (e,userInfo) =>{
       
       e.preventDefault();
        await registerAPI(userInfo);
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
        <Input onChange={(e)=>setuserInfor({...userInfor,email: e.target.value})}  />
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
        <Input.Password onChange={(e)=>setuserInfor({...userInfor,password: e.target.value})}/>
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
        <Input onChange={(e)=>setuserInfor({...userInfor,username: e.target.value})} />
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
        <Input onChange={(e)=>setuserInfor({...userInfor,address: e.target.value})}/>
      </Form.Item>
      <Form.Item
        name="phonenumber"
        label="Phone Number"
        rules={[
        
          {
            required: true,
            message: 'Please input your PhoneNumber!',
          },
        ]}
      >
        <Input onChange={(e)=>setuserInfor({...userInfor,phonenumber: e.target.value})} />
      </Form.Item> 
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={(e)=>handleSubmit(e,userInfor)}>
             Register  
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;