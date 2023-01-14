import { Button, Form, Input, notification, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";
import { updateAPI } from "../../api/authenticate";
import { CheckOutlined, ArrowLeftOutlined,ExclamationCircleOutlined } from "@ant-design/icons";
import BackGround from "../../components/BackGround";
import "./Update.css";
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
  const [fieldsChange, setFieldsChange] = useState(false);
  const { confirm } = Modal;
  let { id } = useParams();
  const onFinish = async (values) => {
    notification.open({
      message: "User's Profile Updated",
      icon: (
        <CheckOutlined
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
    await updateAPI(values, id);
    navigate("/home");
    window.location.reload();
  };
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("update/" + id).then((res) => {
      setData(res.data);
    });
  }, []);
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
        <div className="update-body">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFieldsChange={() => {setFieldsChange(true)}}
            scrollToFirstError
            style={{ minWidth: "400px" }}
          >
            <h1 style={{ marginLeft: "32px" }}>Update User</h1>
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
                  Update
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Update;
