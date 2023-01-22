import React from "react";
import 'antd/dist/antd.css';
import BackGround from "../../components/BackGround";
import { Button,Result } from 'antd';
import "./NotFound.css"
const NotFound = () => (
  <>
  <BackGround/>
  <Result
    className="error" 
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<a href="/home"> <Button type="primary">Back Home</Button></a>}
  />
  </>
);
export default NotFound;