import {
  Descriptions,
  Modal,
  Button,
  Avatar,
  Form,
  Input,
  Select,
  DatePicker,
} from "antd";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { PlusOutlined } from "@ant-design/icons";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import TaskCard from "../../components/TaskCard";
import FormItem from "antd/es/form/FormItem";
import BackGround from "../../components/BackGround";
const Task = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [staff, setStaff] = useState([]);
  const [toggle, setToggle] = useState(true);

  const { TextArea } = Input;

  useEffect(() => {}, [data]);
  useEffect(() => {
    const getData = async () => {
      await axios.get("update/" + id).then((res) => {
        setData(res.data);
      });
      await axios.get("home").then((res) => {
        setStaff(res.data);
      });
    };
    getData();
  }, [id, toggle]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    // await updateperformanceAPI(starCount, id);
    // await setIsModalOpen(false);
    // await setToggle(!toggle);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = async (values) => {
    values["start_date"] = moment(values.start_date).format("YYYY-MM-DD");
    values = {
      ...values,
      admin: JSON.parse(localStorage.getItem("userData")).user.username,
    };
    await axios.post("tasks/create", values).then((res) => {
      console.log(res);
      setToggle(!toggle);
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <div className="static">
              <BackGround/>
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
            <Header user_id={id} active={"Task"} />
          </div>
          <div className="flex justify-end mr-96">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={showModal}
            style={{
              display:
                JSON.parse(localStorage.getItem("userData")).user.role
                  .role_name === "ADMIN"
                  ? ""
                  : "none",
            }}
          >
            Add Tasks
          </Button>
        </div>
       
        </div>
        <div className="absolute top-80 left-80 h-60 w-70">
          <div className="grid grid-cols-4 gap-10 px-24 pb-8 mt-12">
            {data.task?.map((task) => (
              <TaskCard
                title={task.title}
                id={task.id}
                description={task.description}
                status={task.status}
                start_date={task.start_date}
                due_date={task.due_date}
                setToggle={setToggle}
                toggle={toggle}
              />
            ))}
          </div>
        </div>
        <div>
          <Modal
            title="Assign Task"
            onCancel={handleCancel}
            visible={isModalOpen}
            footer={null}
          >
            <Form
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              onFinish={onFinish}
            >
              <Form.Item name="title" label="Title">
                <Input />
              </Form.Item>
              <Form.Item name="assignee" label="Assignee">
                <Select>
                  {staff.map((staff) => (
                    <Select.Option value={staff.username}>
                      {staff.username}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="start_date" label="Start Date">
                <DatePicker format="YYYY-MM-DD" />
              </Form.Item>

              <Form.Item name="description" label="Description">
                <TextArea rows={4} />
              </Form.Item>
              <FormItem className="flex justify-end">
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </FormItem>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Task;
