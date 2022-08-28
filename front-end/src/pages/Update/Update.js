import { Button, Form, Input,notification } from "antd";
import React, { useState, useEffect } from "react";                                                                                                                                                                                                                                                                                                                                                                                                                                                    
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";
import { updateAPI } from "../../api/authenticate";
import { CheckOutlined,ArrowLeftOutlined } from "@ant-design/icons";
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
  const navigate = useNavigate();
  let { id } = useParams();
  const onFinish = async (values) => {
    notification.open({
      message: 'Updated',
      icon: (
        <CheckOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
    await updateAPI(values, id);
    navigate("/home");
    window.location.reload()
  };
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("update/" + id).then((res) => {
      setData(res.data);
    });
  }, []);
  React.useEffect(() => {
    form.setFieldsValue({
      username: data.username,
      email: data.email,
      phonenumber: data.phonenumber,
      address: data.address,
      password: data.password,
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
      style={{ paddingTop: "200px", marginRight: "600px", marginLeft: "500px" }}
    >
      <h1 style={{ marginLeft: "230px" }}>UPDATE</h1>
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
          type="primary"
          htmlType="submit"
          style={{
            padding: "0 60px",
            width:"290px"
          }}
        >
          Update
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default Update;
