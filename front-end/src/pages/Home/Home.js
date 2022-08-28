import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./Home.css";
import { Breadcrumb, Layout, Menu, Result, Button, notification } from "antd";
import { Table, Select } from "antd";
import axios from "../../api/axios";
import { Input, Space, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  EditFilled,
  DeleteFilled,
  PlusOutlined,
  CheckOutlined,
} from "@ant-design/icons";
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
          notification.open({
            message: "Logged Out",
            icon: (
              <CheckOutlined
                style={{
                  color: "#108ee9",
                }}
              />
            ),
          });
        }}
      >
        {" "}
        Log Out
      </a>,
      "2"
    ),
  ]),
];

const Home = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([10]);
  const { Option } = Select;
  const { Search } = Input;
  const navigate = useNavigate();
  const handleRow = (record, rowIndex) => ({
    onClick: (e) => {
      navigate(`/otherprofile/${record.id}`);
      window.location.reload();
    },
  });
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
  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      onCell: handleRow,
    },
    {
      title: "Email",
      dataIndex: "email",
      onCell: handleRow,
    },
    {
      title: "Address",
      dataIndex: "address",
      onCell: handleRow,
    },
    {
      title: "Phone",
      dataIndex: "phonenumber",
      onCell: handleRow,
    },
    {
      title: "Role",
      dataIndex: "role_name",
      onCell: handleRow,
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

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
        id: inputData.id,
        username: inputData.username,
        email: inputData.email,
        phonenumber: inputData.phonenumber,
        address: inputData.address,
        role_name: inputData.role.role_name,
        action: [
          <EditFilled
            data-cy="edit-button"
            onClick={() => {
              navigate(`/update/${inputData.id}`);
              window.location.reload();
            }}
          />,
          <DeleteFilled
            data-cy="delete-button"
            onClick={() => handleDelete(inputData.id)}
            style={{ marginLeft: "25px" }}
          />,
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
          <br />
          <Row>
            <Col span={12}>
              {" "}
              <Select
                showSearch
                placeholder="Display"
                optionFilterProp="children"
                onChange={onDisplay}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="5">5</Option>
                <Option value="10">10</Option>
                <Option value="15">15</Option>
              </Select>
            </Col>
            <Col span={12}>
              <div style={{ paddingLeft: "500px" }}>
                <Search
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  size="medium"
                  onSearch={onSearch}
                />
              </div>
            </Col>
          </Row>
          <br />
          <div>
            <Table
              columns={columns}
              dataSource={input}
              pagination={{ pageSize: display }}
              size="middle"
            />
            <span>Add Staff {"  "}</span>
            <PlusOutlined
              data-cy="add-button"
              onClick={() => {
                navigate("/add");
                window.location.reload();
              }}
              style={{ fontSize: "20px" }}
            />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Phan Cong Hieu
        </Footer>
      </Layout>
    );
  } else {
    const input = data.map((inputData) => {
      return {
        id: inputData.id,
        username: inputData.username,
        email: inputData.email,
        phonenumber: inputData.phonenumber,
        address: inputData.address,
        role_name: inputData.role.role_name,
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
          <br />
          <Row>
            <Col span={12}>
              {" "}
              <Select
                showSearch
                placeholder="Display"
                optionFilterProp="children"
                onChange={onDisplay}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                <Option value="5">5</Option>
                <Option value="10">10</Option>
                <Option value="15">15</Option>
              </Select>
            </Col>
            <Col span={12}>
              <div style={{ paddingLeft: "500px" }}>
                <Search
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  size="medium"
                  onSearch={onSearch}
                />
              </div>
            </Col>
          </Row>
          <br />
          <div>
            <Table
              columns={columns}
              dataSource={input}
              pagination={{ pageSize: display }}
              size="middle"
              onRow={(record, rowIndex) => ({
                onClick: (e) => {
                  navigate(`/otherprofile/${record.id}`);
                  window.location.reload();
                },
              })}
            />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Phan Cong Hieu
        </Footer>
      </Layout>
    );
  }
};

export default Home;
