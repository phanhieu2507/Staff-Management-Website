import React from 'react';
import 'antd/dist/antd.css';
import './Home.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Table } from 'antd';
import generatePicker from 'antd/lib/date-picker/generatePicker';
import { listAPI } from '../../api/authenticate';

const { Header, Content, Footer } = Layout;
const columns = [
    {
      title: 'User Name',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    }, 
    {
      title: 'Phone',
      dataIndex: 'phonenumber',
    }

  ];
  const data = [
    {
        key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
   const data2 = async () =>{
      const getData= await listAPI();
      console.log(getData);
     
   }
  
const Home = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
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
        padding: '0 50px',
      }}
    >
         <div>
      <h4>Middle size table</h4>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
      
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default Home;