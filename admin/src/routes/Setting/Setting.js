import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './Setting.scss'

const FormItem = Form.Item

class Setting extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div className="setting">
        <h2>设置 <Icon type="setting"/></h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('oldPassword', {
              rules: [{required: true, message: '请输入原始密码'}],
            })(
              <Input type="password" size='large' prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                     placeholder="请输入原始密码"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('newPassword', {
              rules: [{required: true, message: '请输入新密码'}],
            })(
              <Input size='large' prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="请输入新密码"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('rePassword', {
              rules: [{required: true, message: '请输入新密码'}],
            })(
              <Input size='large' prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="请重复新密码"/>
            )}
          </FormItem>
          <FormItem>
            <Button size='large' type="danger" htmlType="submit" className="setting-btn"> 修改密码 </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const SettingView = Form.create()(Setting)
export default SettingView
