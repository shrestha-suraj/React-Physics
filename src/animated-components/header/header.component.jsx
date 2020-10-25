import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { Menu, Popover } from "antd";
import { SwapOutlined, SettingOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{ width: "100%" }}
    >
      <Menu.Item key="mail" icon={<SwapOutlined />}>
        React Physics
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="All Animations">
        <Menu.Item key="fade-in"><Link to="/fade-in">Fade In</Link></Menu.Item>
        <Menu.Item key="toggle"><Link to="/toggle">Toggle</Link></Menu.Item>
        <Menu.Item key="progess"><Link to="/progress">Progress</Link></Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
        <Menu.Item key="setting:5">Option 5</Menu.Item>
        <Menu.Item key="setting:6">Option 6</Menu.Item>
        <Menu.Item key="setting:7">Option 7</Menu.Item>
        <Menu.Item key="setting:8">Option 8</Menu.Item>
        <Menu.Item key="setting:9">Option 9</Menu.Item>
        <Menu.Item key="setting:10">Option 10</Menu.Item>
        <Menu.Item key="setting:11">Option 11</Menu.Item>
        <Menu.Item key="setting:12">Option 12</Menu.Item>
        <Menu.Item key="setting:13">Option 13</Menu.Item>
        <Menu.Item key="setting:14">Option 14</Menu.Item>
      </SubMenu>
      <Menu.Item key="alipay">
        <Popover
          content={
            <h5>
              Fun tutorial for react-spring.
              <br />
              Follow the tutorial and see the code.
            </h5>
          }
        >
          What is this?
        </Popover>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
