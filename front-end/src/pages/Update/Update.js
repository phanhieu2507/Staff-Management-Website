import { Button, Form, Input } from "antd";
import React, { useState,useEffect } from "react";
import { registerAPI } from "../../api/authenticate";
import { useNavigate ,useParams} from "react-router-dom";
import axios from "../../api/axios";
import { updateAPI } from "../../api/authenticate";
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
const Update = () => {
  const [form] = Form.useForm();
  const navigate=useNavigate();
  let {id}=useParams(); 
  const onFinish = async (values) => {
    console.log(id);
    await updateAPI(values,id);
  
   navigate("/home");
  };
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("update/"+id).then((res) => {
      setData(res.data);
      console.log(1);
      
    });
    console.log(2);
  }, []);
  console.log(data);
  React.useEffect(() => {
    form.setFieldsValue({
        username:data.username ,
         email: data.email,
        phonenumber: data.phonenumber,
         address:data.address,
         password:data.password
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
    <h1 style={{ marginLeft: "220px"}}>Update</h1>
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
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Update;
