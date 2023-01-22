import { LockOutlined, UserOutlined,SmileOutlined,CloseOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input ,notification} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { loginAPI } from "../../api/authenticate";
import BackGround from "../../components/BackGround";
const Login = () => {

  const navigate = useNavigate();
  const onFinish = async (values) => {
    const response = await loginAPI(values);
    console.log(response);
    if (response.status === "success") {
     // response = response.json();
      localStorage.setItem('userData',JSON.stringify(response));
      notification.open({
        message: 'Welcome '+response.user.username +'!',
        icon: (
          <SmileOutlined
            style={{
              color: '#108ee9',
            }}
          />
        ),
      });
      navigate("/home");
    } else {
      navigate("/login"); 
      notification.open({
        message: 'The Email or Password is Incorrect',
        icon: (
          <CloseOutlined
            style={{
              color: '#108ee9',
            }}
          />
        ),
      });
    };
  };

  return (
    <div >
    <BackGround/>
    <div  className="form-body">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style= {{ padding: "20px 20px" }}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}

      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          LOGIN
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
    </div>
    
    </div>
  );
};

export default Login;
