import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import 'antd/dist/antd.css';
import './loginForm.css';
import axios from 'axios';

class RegisterForm extends React.Component {
  handleSubmit = e => {
    const loading = message.loading('Creating user...', 0)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('/users', {
          first_name: values.first_name,
          last_name: values.last_name,
          username: values.username,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirm,
        }).then((response) => {
          loading();
          if (response.status === 201) {
            message.success('User created', 1, () => {
              window.location = '/login'
            })
          } else {
            message.error('Something happened, contact support');
          }
        }).catch((error) => {
          loading();
          error.response.data.errors.forEach((item) => {
            message.error(item);
          })
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <Form.Item>
          {getFieldDecorator('first_name', {
            rules: [{ required: true, message: 'Please input your first name!' }],
          })(
            <Input
              prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('last_name', {
            rules: [{ required: true, message: 'Please input your last name!' }],
          })(
            <Input
              prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last Name"
            />,
          )}
        </Form.Item>
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
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
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
          {getFieldDecorator('password_confirm', {
            rules: [{ required: true, message: 'Please confirm your password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password confirmation"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
          Or <a href="/login">Log in now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(RegisterForm);
export default WrappedNormalLoginForm;