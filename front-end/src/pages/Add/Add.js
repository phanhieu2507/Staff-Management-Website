import { Button, Form, Input, notification, Modal } from "antd";
import React, { useState } from "react";
import { registerAPI } from "../../api/authenticate";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, CheckOutlined,ExclamationCircleOutlined } from "@ant-design/icons";
import BackGround from "../../components/BackGround";
import "./Add.css";
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
  const [fieldsChange, setFieldsChange] = useState(false);
  const navigate = useNavigate();
  const { confirm } = Modal;
  const onFinish = async (values) => {
    await registerAPI(values);
    notification.open({
      message: "User has been added to your company",
      icon: (
        <CheckOutlined
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
    form.resetFields();
  };
  const showConfirm = () => {
    confirm({
      title: 'Leave site?',
      icon: <ExclamationCircleOutlined />,
      content: 'Your changes have not been saved.',
  
      onOk() {
        navigate(`/home`);
        window.location.reload();

      },
      onCancel() {
      },
    });
  };
  return (
    <>
      <ArrowLeftOutlined
        className="back-button"
        style={{ fontSize: "30px", width: "50px" }}
        onClick={() => {
          if(fieldsChange) {
            showConfirm()
          }
          else{
          navigate(`/home`);
          window.location.reload();
          }
        }}
      />
      <div>
        <BackGround />
        <div className="add-body">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFieldsChange={() => {setFieldsChange(true)}}
            scrollToFirstError
            style={{ minWidth: "400px" }}
          >
            <h1 style={{ marginLeft: "32px" }}>Add Staff</h1>
            <hr style={{ margin: "10px 35px 20px 35px" }} />
            <div style={{ marginLeft: "50px", marginRight: "-95px" }}>
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
              <div style={{ paddingLeft: "20px" }}>
                {" "}
                <br />
                <Button type="primary" htmlType="submit">
                  Add Staff
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Add;
