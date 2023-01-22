import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./Home.css";
import { Layout, Menu, notification } from "antd";
import { Table, Select } from "antd";
import axios from "../../api/axios";
import { Input, Col, Row, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  EditFilled,
  DeleteFilled,
  PlusOutlined,
  CheckOutlined,
  SearchOutlined,
  LogoutOutlined,
  ProfileOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import BackGround from "../../components/BackGround";
import Notification from "../../components/Notification";
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
  getItem(<b>User</b>, "sub1", <UserOutlined />, [
    getItem(
      <a style={{ textDecoration: "none" }} href={`/profile`}>
        {" "}
        <ProfileOutlined /> &nbsp; Profile
      </a>,
      "1"
    ),
    getItem(
      <a
        href={`/login`}
        style={{ textDecoration: "none" }}
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
        {"  "} <LogoutOutlined /> &nbsp; Log Out
      </a>,
      "2"
    ),
  ]),
];

const Home = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([10]);
  const [searching, setSearching] = useState(false);
  const { Option } = Select;
  const { Search } = Input;
  const { confirm } = Modal;
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
  };
  const onDisplay = (value) => {
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
      title:
        JSON.parse(localStorage.getItem("userData")).user.role.role_name ===
        "ADMIN"
          ? "Action"
          : "",
      dataIndex: "action",
    },
  ];
  const showConfirm = (id) => {
    confirm({
      title: "Are you sure you want to delete?",
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone",

      onOk() {
        handleDelete(id);
        notification.open({
          message: "Deleted",
          icon: (
            <CheckOutlined
              style={{
                color: "#108ee9",
              }}
            />
          ),
        });
      },

      onCancel() {},
    });
  };

  useEffect( () => {
    const getData = async () => {
    await axios.get("home").then((res) => {
      setData(res.data);
    })}
    getData();
  }, []);
  const handleDelete = async (id) => {
    await axios.delete("delete/" + id);
    await axios.get("home").then((res) => {
      setData(res.data);
    });
  };
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
          className="text-blue-500"
          style={{
            display:
              JSON.parse(localStorage.getItem("userData")).user.role
                .role_name === "ADMIN"
                ? ""
                : "none",
          }}
          onClick={() => {
            navigate(`/update/${inputData.id}`);
            window.location.reload();
          }}
        />,
        <DeleteFilled
          data-cy="delete-button"
          onClick={() => showConfirm(inputData.id)}
          className="text-red-500"
          style={{
            marginLeft: "25px",
            display:
              JSON.parse(localStorage.getItem("userData")).user.role
                .role_name === "ADMIN"
                ? ""
                : "none",
          }}
        />,
      ],
    };
  });
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="flex flex-row justify-between">
        <Menu
          theme="light"
          style={{
            width: 256,
            paddingRight: "20px",
          }}
          items={items}
        />
        <Notification/>
        </div>
        
        <hr
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            right: "0",
            border: "1px solid rgb(240, 240, 240)",
          }}
        />
      </Header>
      <Content>
        <BackGround />
        <div className="row-property">
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
              <div style={{ position: "absolute", right: "0px" }}>
                <span>
                  {" "}
                  <PlusOutlined
                    data-cy="add-button"
                    onClick={() => {
                      navigate("/add");
                      window.location.reload();
                    }}
                    style={{
                      fontSize: "25px",
                      position: "relative",
                      top: "2px",
                      right: "5px",
                    }}
                  />{" "}
                </span>
                <span>
                  <SearchOutlined
                    onClick={() => {
                      setSearching(!searching);
                    }}
                    style={{
                      display: !searching ? "" : "none",
                      fontSize: "25px",
                    }}
                  />
                  <Search
                    placeholder="input search text"
                    allowClear
                    size="medium"
                    onSearch={onSearch}
                    style={{
                      display: searching ? "" : "none",
                      maxWidth: "200px",
                    }}
                  />
                </span>
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
              style={{ border: "2px solid rgb(240, 240, 240)" }}
            />
          </div>
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
};

export default Home;
