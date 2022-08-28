import { Button, Form, Input } from "antd";
import React, { useState,useEffect } from "react";
import { useNavigate ,useParams} from "react-router-dom";
import axios from "../../api/axios";
import {ArrowLeftOutlined} from '@ant-design/icons'
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
const OtherProfile = () => {
  const [form] = Form.useForm();
  const navigate=useNavigate();
  let {id}=useParams(); 
  const onFinish = async () => {
    console.log(id);
   navigate("/home");
  };
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("update/"+id).then((res) => {
      setData(res.data);      
    });
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
      style={{  paddingTop: "100px",marginRight: "600px",marginLeft: "400px"  }}
      disabled={true}
    >  
    <h1 style={{ marginLeft: "185px"}}>USER PROFILE</h1>
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
     
    </Form>
    </>
  );
};

export default OtherProfile;
