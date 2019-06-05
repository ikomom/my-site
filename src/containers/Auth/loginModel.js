import {Button, Checkbox, Icon, Input} from "antd";
import React from "react";
import {Link} from "react-router-dom";

/**
 * Created by ikonon on 2019/6/2
 */

export const options = {
  username: {
    options: {
      rules: [{required: true, min: 3, max: 10, whitespace: true}]
    },
    render: <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username/Email"/>,
  },
  password: {
    options: {
      rules: [{required: true, min: 6, max: 15, whitespace: true}],
    },
    render: <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                   placeholder="Password"/>,
  },
  remember: {
    options: {
      valuePropName: 'checked',
      initialValue: true,
    },
    render: <Checkbox>Remember me</Checkbox>,
    afterRender: <>
      <div className="login-form-forgot">
        <Link to="/">忘记密码</Link>
        &nbsp;|&nbsp;
        <Link to="/signup">注册</Link>
      </div>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>

    </>
  }

};

const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
export const signUpOptions = {
  username: {
    options: {
      rules: [{required: true, min: 3, max: 10, whitespace: true}]
    },
    render: <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>,
  },
  email: {
    options: {
      rules: [{required: true, whitespace: true,}, {pattern: emailReg, message: '邮箱不正确'}]
    },
    render: <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Email"/>,
  },
  password: {
    options: {
      rules: [{required: true, min: 6, max: 15, whitespace: true}],
    },
    render: <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                   placeholder="Password"/>,
    afterRender:
      <Button type="primary" htmlType="submit" className="login-form-button">
        Sign Up
      </Button>,
  }

};
