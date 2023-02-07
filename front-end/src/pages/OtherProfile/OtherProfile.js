import {
  Descriptions,
  Modal,
  Button,
  Table,
  Rate,
  Avatar,
  InputNumber,
} from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import {
  StarTwoTone,
} from "@ant-design/icons";
import "./OtherProfile.css";
import BackGround from "../../components/BackGround";
import Chart from "../../components/Chart";
import Sidebar from "../../components/Sidebar";
import { updateperformanceAPI } from "../../api/authenticate";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
const OtherProfile = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [perform, setPerform] = useState([]);
  const [starCount, setstarCount] = useState({});
  const [toggle, setToggle] = useState(true);
  const [bonus, setBonus] = useState(100000);
  const columns = [
    {
      title: "Month",
      dataIndex: "month",
    },
    {
      title: "Performance",
      dataIndex: "performance",
    },
  ];

  useEffect(() => {
    setPerform([
      { month: "1", perform: data.evaluate?.month_1 },
      { month: "2", perform: data.evaluate?.month_2 },
      { month: "3", perform: data.evaluate?.month_3 },
      { month: "4", perform: data.evaluate?.month_4 },
      { month: "5", perform: data.evaluate?.month_5 },
      { month: "6", perform: data.evaluate?.month_6 },
      { month: "7", perform: data.evaluate?.month_7 },
      { month: "8", perform: data.evaluate?.month_8 },
      { month: "9", perform: data.evaluate?.month_9 },
      { month: "10", perform: data.evaluate?.month_10 },
      { month: "11", perform: data.evaluate?.month_11 },
      { month: "12", perform: data.evaluate?.month_12 },
    ]);
    setstarCount({
      month_1: data.evaluate?.month_1,
      month_2: data.evaluate?.month_2,
      month_3: data.evaluate?.month_3,
      month_4: data.evaluate?.month_4,
      month_5: data.evaluate?.month_5,
      month_6: data.evaluate?.month_6,
      month_7: data.evaluate?.month_7,
      month_8: data.evaluate?.month_8,
      month_9: data.evaluate?.month_9,
      month_10: data.evaluate?.month_10,
      month_11: data.evaluate?.month_11,
      month_12: data.evaluate?.month_12,
    });
  }, [data]);
  const inputData = [
    {
      month: 1,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_1}
          onChange={(value) => {
            setstarCount({ ...starCount, month_1: value });
          }}
        />
      ),
    },
    {
      month: 2,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_2}
          onChange={(value) => {
            setstarCount({ ...starCount, month_2: value });
          }}
        />
      ),
    },
    {
      month: 3,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_3}
          onChange={(value) => {
            setstarCount({ ...starCount, month_3: value });
          }}
        />
      ),
    },

    {
      month: 4,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_4}
          onChange={(value) => {
            setstarCount({ ...starCount, month_4: value });
          }}
        />
      ),
    },
    {
      month: 5,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_5}
          onChange={(value) => {
            setstarCount({ ...starCount, month_5: value });
          }}
        />
      ),
    },
    {
      month: 6,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_6}
          onChange={(value) => {
            setstarCount({ ...starCount, month_6: value });
          }}
        />
      ),
    },
    {
      month: 7,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_7}
          onChange={(value) => {
            setstarCount({ ...starCount, month_7: value });
          }}
        />
      ),
    },
    {
      month: 8,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_8}
          onChange={(value) => {
            setstarCount({ ...starCount, month_8: value });
          }}
        />
      ),
    },
    {
      month: 9,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_9}
          onChange={(value) => {
            setstarCount({ ...starCount, month_9: value });
          }}
        />
      ),
    },
    {
      month: 10,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_10}
          onChange={(value) => {
            setstarCount({ ...starCount, month_10: value });
          }}
        />
      ),
    },
    {
      month: 11,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_11}
          onChange={(value) => {
            setstarCount({ ...starCount, month_11: value });
          }}
        />
      ),
    },
    {
      month: 12,
      performance: (
        <Rate
          defaultValue={data.evaluate?.month_12}
          onChange={(value) => {
            setstarCount({ ...starCount, month_12: value });
          }}
        />
      ),
    },
  ];
  const dataSourceBegin = [
    {
      month: "1",
      bonus: starCount.month_1 * bonus,
    },
    {
      month: "2",
      bonus: starCount.month_2 * bonus,
    },
    {
      month: "3",
      bonus: starCount.month_3 * bonus,
    },
    {
      month: "4",
      bonus: starCount.month_4 * bonus,
    },
    {
      month: "5",
      bonus: starCount.month_5 * bonus,
    },
    {
      month: "6",
      bonus: starCount.month_6 * bonus,
    },
  ];
  const dataSourceEnd = [
    {
      month: "7",
      bonus: starCount.month_7 * bonus,
    },
    {
      month: "8",
      bonus: starCount.month_8 * bonus,
    },
    {
      month: "9",
      bonus: starCount.month_9 * bonus,
    },
    {
      month: "10",
      bonus: starCount.month_10 * bonus,
    },
    {
      month: "11",
      bonus: starCount.month_11 * bonus,
    },
    {
      month: "12",
      bonus: starCount.month_12 * bonus,
    },
    {
      month: <b>Total</b>,
      bonus: (
        (starCount.month_1 +
          starCount.month_2 +
          starCount.month_3 +
          starCount.month_4 +
          starCount.month_5 +
          starCount.month_6 +
          starCount.month_7 +
          starCount.month_8 +
          starCount.month_9 +
          starCount.month_10 +
          starCount.month_11 +
          starCount.month_12) *
        bonus
      ).toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      }),
    },
  ];

  const dataColumns = [
    {
      title: "Month",
      dataIndex: "month",
    },
    {
      title: "Bonus (VND)",
      dataIndex: "bonus",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      await axios.get("update/" + id).then((res) => {
        setData(res.data);
      });
    };

    getData();
  }, [id, toggle]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    await updateperformanceAPI(starCount, id);
    await setIsModalOpen(false);
    await setToggle(!toggle);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div>
        <div className="static">
          <BackGround />
        </div>
        <div className=" w-full bg-white fixed left-0 top-0 z-10">
          <Navbar />
        </div>
        <div className=" fixed left-0 top-0 mt-0 z-20">
          <Sidebar />
        </div>
        <div className="fixed top-16 left-56 flex w-full flex-col bg-white z-20">
          <div className=" fixed top-20 left-80 flex z-20">
            <Avatar
              className="w-1/3"
              size={170}
              src={
                data.role?.role_name === "ADMIN"
                  ? "https://cdn-icons-png.flaticon.com/512/1802/1802979.png"
                  : "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
              }
            />

            <Descriptions
              className="max-w-2xl pl-10 z-20 bg-white"
              layout="vertical"
            >
              <Descriptions.Item label="User Name">
                {data.username}
              </Descriptions.Item>
              <Descriptions.Item label="Telephone">
                {data.phonenumber}
              </Descriptions.Item>
              <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
              <Descriptions.Item label="Address">
                {data.address}
              </Descriptions.Item>
              <Descriptions.Item label="Role">
                {data.role_id === 1 ? "ADMIN" : "STAFF"}
              </Descriptions.Item>
            </Descriptions>
          </div>
          <div className="  mt-44 ">
            <Header user_id={id} />
          </div>
          <div
            className={"flex justify-end mr-96 "}
            style={{
              display:
                JSON.parse(localStorage.getItem("userData")).user.role
                  .role_name === "ADMIN"
                  ? ""
                  : "none",
            }}
          >
            <Button type="text" onClick={showModal}>
              Evaluate
              <StarTwoTone />
            </Button>
          </div>
          <Modal
            title={data.username}
            visible={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Table
              columns={columns}
              dataSource={inputData}
              size="middle"
              style={{ border: "2px solid rgb(240, 240, 240)" }}
            />
          </Modal>
        </div>
      </div>
      <div className="absolute top-96 left-96 ">
        <div className="flex flex-col gap-10">
      <InputNumber className ="w-36 rounded-md" 
      addonBefore="Base Salary" 
      addonAfter="₫" 
      defaultValue={bonus}
      onPressEnter = {(e) => {
        setBonus(e.target.value)
      }} />
        <div className="flex flex-row gap-20 ">
          <div>
            <Table
              columns={dataColumns}
              dataSource={dataSourceBegin}
              size="large"
              style={{ border: "2px solid rgb(240, 240, 240)" }}
            />
          </div>
          <div>
            <Table
              columns={dataColumns}
              dataSource={dataSourceEnd}
              size="large"
              style={{ border: "2px solid rgb(240, 240, 240)" }}
            />
          </div>
          <div>
            {" "}
            <Chart data={perform} />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default OtherProfile;
