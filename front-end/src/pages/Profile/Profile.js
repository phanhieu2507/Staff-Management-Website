import { Button, Form, Input, Descriptions } from "antd";
import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import BackGround from "../../components/BackGround";
import './Profile.css'
const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(async () => {
    await setData(JSON.parse(localStorage.getItem("userData")).user);
  }, []);
  return (
    <>
      <BackGround/>
      <ArrowLeftOutlined
        className="back-button"
       // style={{ fontSize: "30px", width: "50px" }}
        onClick={() => {
          navigate(`/home`);
          window.location.reload();
        }}
      />
      <Descriptions
        className="profile"
        title="My Profile"
        layout="vertical"
        bordered="true"
       
      >
        <Descriptions.Item label="UserName">{data.username}</Descriptions.Item>
        <Descriptions.Item label="Telephone">
          {data.phonenumber}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
        <Descriptions.Item label="Address">{data.address}</Descriptions.Item>
        <Descriptions.Item label="Role">{data.role_id === 1 ? "ADMIN" : "STAFF"
}</Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default Profile;
