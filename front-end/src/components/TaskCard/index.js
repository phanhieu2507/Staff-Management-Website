import { Card, Modal, Form, Select, Button, DatePicker, Input } from 'antd';
import 'antd/dist/antd.css';
import React, { useState, useEffect } from "react";
import axios from '../../api/axios';
import {CheckCircleTwoTone,ExclamationCircleTwoTone,EditOutlined,DeleteOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';
import { useParams } from "react-router-dom";
const TaskCard = (props) => {
const [done,setDone] = useState(props.status==='1'?true:false);
const [isModalOpen,setIsModalOpen] = useState(false);

const { TextArea } = Input;
const Option = Select.Option
let { id } = useParams();
const handleDelete = async (id) => {
  await axios.delete(`tasks/delete/${id}`).then(res => {
    props.setToggle(!props.toggle)
  })
}
const onFinish = async (values) => {
  values = {
    ...values,
    admin: JSON.parse(localStorage.getItem("userData")).user.username,
  };
  await axios.put(`tasks/edit/${props.id}`,values ).then(res => {
    props.setToggle(!props.toggle)
    setIsModalOpen(false)
  })
}

return (
  <>
    <Card 
    title= {props.title}
    className= "shadow-2xl z-0" 
    extra={props.status === '1' ? <CheckCircleTwoTone twoToneColor="#52c41a"/>: <ExclamationCircleTwoTone/> } 
    style={{ width: 200, height:250 }}
    size="small"
    actions={[
      <DeleteOutlined
      key="delete" 
      className= "text-red-500 hover:text-red-900"
      style={{
        display:
          JSON.parse(localStorage.getItem("userData")).user.role
            .role_name === "ADMIN" 
            ||JSON.parse(localStorage.getItem("userData")).user
            .id === parseInt(id)
            ? ""
            : "none",
      }}
      onClick={()=>{handleDelete(props.id)}} />,
      <EditOutlined 
      key="edit" 
      onClick={()=>{setIsModalOpen(true)}}
      style={{
        display:
          JSON.parse(localStorage.getItem("userData")).user.role
            .role_name === "ADMIN" 
            ||JSON.parse(localStorage.getItem("userData")).user
            .id === parseInt(id)
            ? ""
            : "none",
      }} />,
      
    ]}>
      <div className='flex flex-col'>
      <h6 className='mb-1'>Description: </h6>
      <p className='mb-0'>{props.description}</p>
      <h6 className='mb-1'>Start Date: </h6>
      <p className='mb-0'>{props.start_date}</p>
      <h6 className='mb-1'>Due Date: </h6>
      <p className='mb-0'>{props.due_date ? props.due_date : <br/> }</p>
      </div>
    </Card>
   
    <Modal
            title="Edit Assigned Task"
            visible={isModalOpen}
            onCancel = {() => {setIsModalOpen(false)}}
            footer={null}
          >
            <Form
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              onFinish={onFinish}
              initialValues={{ 
                status:props.status,
                title:props.title,
                description: props.description,
                id: props.id,
             }}
            > 
              <Form.Item name= "status" label="Status" > 
                <Select defaultValue={props.status}>
                  <Option value="0">In Progress</Option>
                  <Option value="1">Done</Option>
                </Select>
              </Form.Item>
              <Form.Item name= "title" label="Title">
                <Input defaultValue = {props.title}/>
              </Form.Item>
              <Form.Item name="description" label="Description" >
                <TextArea defaultValue = {props.description}  rows={4} />
              </Form.Item>
                    <Form.Item  className="flex justify-end">
                    <Button type="primary" htmlType="submit">
                Save
              </Button>
                    </Form.Item>
            </Form>
            
          </Modal>
   
    </>
)
}

export default TaskCard;