
import 'antd/dist/antd.css';
import './style.css';
import {  HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: (<a href='/home'>HOME</a>),
    key: 'home',
    icon: <HomeOutlined />,
  },
  
];
const Navbar = () => {
  return <Menu  className="navbar"mode="horizontal" items={items} />;
};
export default Navbar;