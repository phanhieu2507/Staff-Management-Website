import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./Home.css";
import { Breadcrumb, Layout, Menu, Result, Button } from "antd";
import { Table,Select } from "antd";
import axios from "../../api/axios";
import { Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("User", "sub1", <UserOutlined />, [
    getItem(<a href={`/profile`}> Profile</a>, "1"),
    getItem(
      <a
        href={`/login`}
        onClick={() => {
          localStorage.removeItem("userData");
        }}
      >
        {" "}
        Log Out
      </a>,
      "2"
    ),
  ]),
];
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
  const [display,setDisplay]=useState([10]);
  const { Option } = Select;
  const { Search } = Input;
  const onSearch = async (value) => {
    await axios.get("search/" + value).then((res) => {
      setData(res.data);
    });
    console.log(data);
  };
  const onDisplay = (value) => {
    console.log(value);
    setDisplay(value);
  };
  useEffect(async () => {
    await axios.get("home").then((res) => {
      setData(res.data);
    });
  }, []);
  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete("delete/" + id);
    await axios.get("home").then((res) => {
      setData(res.data);
    });
  };
  if (
    JSON.parse(localStorage.getItem("userData")).user.role.role_name === "ADMIN"
  ) {
    const input = data.map((inputData) => {
      return {
        username:  <a href={`/otherprofile/${inputData.id}`}>{inputData.username}</a>,
        email: <a href={`/otherprofile/${inputData.id}`}>{inputData.email}</a>,
        phonenumber: <a href={`/otherprofile/${inputData.id}`}>{inputData.phonenumber}</a>,
        address: <a href={`/otherprofile/${inputData.id}`}>{inputData.address}</a>,
        role_name: <a href={`/otherprofile/${inputData.id}`}>{inputData.role.role_name}</a>,
        action: [
          <a href={`/update/${inputData.id}`}>
            {" "}
            <Button type="primary">Update</Button>
          </a>,
          <Button
            className="mr-3"
            type="primary"
            danger
            onClick={() => {
              handleDelete(inputData.id);
            }}
          >
            Delete
          </Button>,
        ],
      };
    });
    return (
      <Layout className="layout">
        <Header>  
          <Menu
            theme="dark"
            style={{
              width: 256,
            }}
            items={items}
          />
          <div style={{ marginLeft: "1000px" }}></div>
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Select
    showSearch
    placeholder="Display"
    optionFilterProp="children"
    onChange={onDisplay}
    
    filterOption={(input, option) =>
      option.children.toLowerCase().includes(input.toLowerCase())
    }
  >
    <Option value="10">10</Option>
    <Option value="15">15</Option>
    <Option value="25">25</Option>
  </Select>
          <div style={{ paddingLeft: "1200px" }}>
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </div>

          <div>
            <Table columns={columns} dataSource={input} pagination={{pageSize: display}} size="middle" />
            <a href={`/add`}>
              {" "}
              <Button
                style={{
                  padding: "0 50px",
                }}
                type="primary"
              >
                Add
              </Button>
            </a>
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
  } else {
    const input = data.map((inputData) => {
      return {
        username:  <a href={`/otherprofile/${inputData.id}`}>{inputData.username}</a>,
        email: <a href={`/otherprofile/${inputData.id}`}>{inputData.email}</a>,
        phonenumber: <a href={`/otherprofile/${inputData.id}`}>{inputData.phonenumber}</a>,
        address: <a href={`/otherprofile/${inputData.id}`}>{inputData.address}</a>,
        role_name: <a href={`/otherprofile/${inputData.id}`}>{inputData.role.role_name}</a>,
      };
    });
    return (
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            style={{
              width: 256,
            }}
            items={items}
          />
          <div style={{ marginLeft: "1000px" }}></div>
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Select
    showSearch
    placeholder="Display"
    optionFilterProp="children"
    onChange={onDisplay}
    filterOption={(input, option) =>
      option.children.toLowerCase().includes(input.toLowerCase())
    }
  >
    <Option value="10">10</Option>
    <Option value="15">15</Option>
    <Option value="25">25</Option>
  </Select>
          <div style={{ paddingLeft: "1200px" }}>
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </div>

          <div>
            <Table columns={columns} dataSource={input} pagination={{pageSize: display}} size="middle" />
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
  }
};

export default Home;
