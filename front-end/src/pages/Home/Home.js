import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./Home.css";
import { Breadcrumb, Layout, Menu, Result,Button } from "antd";
import { Table } from "antd";
import axios from "../../api/axios";
import { Input, Space } from 'antd';
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;


const columns = [
  {
    title: "User Name",
    dataIndex: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Phone",
    dataIndex: "phonenumber",
  },
  {
    title: "Role",
    dataIndex: "role_name",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Home = () => {
  const [data, setData] = useState([]);
  const { Search } = Input;
const onSearch = async (value) => {

  await axios.get("search/"+value).then((res=>{
    setData(res.data);
  }))
  console.log(data);
}
  useEffect(async () => {
    await axios.get("home").then((res) => {
      setData(res.data);
    });
  }, []);
  const handleDelete = async (id) =>
  {
    console.log(id);
        await axios.delete("delete/"+id);
        await axios.get("home").then((res) => {
        setData(res.data);});

  }
  const navigate=useNavigate();
  const input = data.map((inputData) => {
    return {
        username: inputData.username,
        email: inputData.email,
        phonenumber: inputData.phonenumber,
        address: inputData.address,
      role_name:inputData.role.role_name,
        action: [
            <Button type="primary"onClick={()=>{navigate("/update/"+inputData.id)}}>Update</Button>,
            <Button className='mr-3' type="primary" danger onClick={()=>{handleDelete(inputData.id)}} >Delete</Button>, 
        ]
    }
})
  console.log(data);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div style={{ paddingLeft:"1200px" }}>
        <Search
        
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
        </div>
        <div>
       
          <Table columns={columns} dataSource={input} size="middle" />
          <Button style={{
          padding: "0 50px",
        }}type="primary"onClick={()=>{navigate("/add")}}>Add</Button>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
       sun*Asterisk
      </Footer>
    </Layout>
  );
};

export default Home;
