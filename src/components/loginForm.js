import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import 'antd/dist/antd.css';
import './loginForm.css';
import axios from 'axios';
const Cookies = require('js-cookie');

class LoginForm extends React.Component {
  handleSubmit = e => {
    const loading = message.loading('Signing in...', 0);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post(
          '/auth/login',
          { identity: values.username, password: values.password }
        ).then((response) => {
          loading();
          Cookies.set('token', response.data.token);
          window.location = '/';
        }).catch((error) => {
          loading();
          message.error('Username / Email or Password mismatch please review');
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
            </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default WrappedNormalLoginForm;