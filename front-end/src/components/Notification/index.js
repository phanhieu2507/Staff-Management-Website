import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Badge } from "antd";
import { BellTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

const Notification = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          "notification/" + JSON.parse(localStorage.getItem("userData")).user.id
        )
        .then((response) => {
          setData(response.data.noti);
        });
    };
    getData();
  }, []);
  return (
    <>
      <Dropdown
        overlay={
          <Menu>
            {data?.map((value, index) => {
              return (
                <>
                  <a
                    href={`/otherprofile/${
                      JSON.parse(localStorage.getItem("userData")).user.id
                    }/tasks`}
                    className="no-underline hover:text-blue-600"
                  >
                    <Menu.Item key={index} className=" hover:text-blue-600">{value.description}</Menu.Item>
                  </a>
                </>
              );
            })}
          </Menu>
        }
        trigger={["click"]}
      >
        <div>
          <Badge count={data?.length}>
            <BellTwoTone />
          </Badge>
        </div>
      </Dropdown>
    </>
  );
};

export default Notification;
