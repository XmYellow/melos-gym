// rcd +回车
import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Form, Input, Icon, message, Select } from 'antd'

const Option = Select.Option
const FormItem = Form.Item
let timer = null
const resetUser = {
  username: {value: '', status: '', msg: '', required: true},
  phone: {value: '', status: '', msg: '', required: true},
  email: {value: '', status: '', msg: '', required: true},
  password: {value: '', status: '', msg: '', required: true},
}

class TeachModal extends React.Component {
  state = {user: {...resetUser}}
  // 渲染icon
  renderIcon = type => (<Icon type={type} style={{color: 'rgba(0,0,0,.25)'}}/>)
  // 提交
  handleSubmit = async (e) => {
    const user = this.state.user
    const newUser = {}
    for (let key in user) {
      user[key] = this.userRule(key, user[key].value)
      newUser[key] = user[key].value
    }
    this.setState(user)
    for (let key in user) {
      if (user[key].status === 'error') return
    }
    await this.props.addUser(newUser).catch(err => { throw err })
    this.props.handleOk()
    message.success('添加用户成功')
    this.setState({user: {...resetUser}})
  }

  // check api
  asyncCheckUser = async (key, value) => {
    const {data: {exit = true, msg}} = await api.get(`/api/users/check?key=${key}&value=${value}`)
    return {exit, msg}
  }
  // 验证规则
  userRule = (target, value) => {
    const reg = {
      username: /[a-zA-Z0-9\x00-\xff\u4e00-\u9fa5]{4,12}$/,
      phone: /^1[3|4|5|8][0-9]\d{8}$/,
      email: /^[a-zA-Z_]{1,}[0-9]{0,}@(([a-zA-z0-9]-*){1,}\.){1,3}[a-zA-z\-]{1,}$/,
      password: /^\S{6,12}$/
    }
    const msg = {
      username: '请输入4-12个字符的用户名',
      phone: '请输入正确的电话号码',
      email: '请输入正确的邮箱地址',
      password: '请输入6-12个数字或者英文密码',
    }
    if (!(reg[target]).test(value)) {
      return {value, status: 'error', msg: msg[target]}
    }
    return {value, status: 'success', msg: ''}
  }
  // 修改
  onChange = (e, target) => {
    const user = this.state.user
    const value = e.target.value
    user[target] = this.userRule(target, value)
    this.setState(user)
    clearTimeout(timer)
    timer = setTimeout(async () => {
      if (target !== 'password') {
        const checkRes = await this.asyncCheckUser(target, value)
        if (checkRes.exit) user[target] = {value, status: 'error', msg: checkRes.msg}
      }
      this.setState(user)
    }, 400)
  }
  handleSelectChange = (select) => {
    console.log(select)
  }

  render () {
    const {handleSubmit, onChange, renderIcon} = this
    const {handleCancel, loading, visible} = this.props
    const {email, username, phone, password} = this.state.user
    const footer = [<Button size='large' key="back" onClick={handleCancel}>取消</Button>,
      <Button size='large' key="submit" type="primary" loading={loading} onClick={handleSubmit}>添加新文章</Button>]
    const formItemLayout = {
      labelCol: {xs: {span: 24}, sm: {span: 4},},
      wrapperCol: {xs: {span: 24}, sm: {span: 20},},
    }

    return (
      <Modal title="添加新用户" className="admin-user__model" visible={visible} width="50%"
             onOk={handleSubmit} onCancel={handleCancel}
             footer={footer}>
        <div className="form-box flex-center">
          <Form className="user-modal__form">
            <FormItem  {...formItemLayout} label="标题" hasFeedback required
                       validateStatus={username.status} help={username.msg}>
              <Input size='large' prefix={renderIcon('user')} onChange={e => {onChange(e, 'username')}}
                     placeholder="请输入标题" value={username.value}/>
            </FormItem>
            <FormItem  {...formItemLayout} label="文章地址" hasFeedback required
                       validateStatus={email.status} help={email.msg}>
              <Input size='large' prefix={renderIcon('paper-clip')} onChange={e => {onChange(e, 'email')}}
                     placeholder="文章地址" value={email.value}/>
            </FormItem>
            <FormItem label="文章分类"  {...formItemLayout} hasFeedback required validateStatus={phone.status}
                      help={phone.msg}>
              <Select size='large'
                      placeholder="请选择分类"
                      onChange={this.handleSelectChange}>
                <Option value="健身小知识">健身小知识</Option>
                <Option value="健身饮食">健身饮食</Option>
              </Select>
            </FormItem>
          </Form>
        </div>
      </Modal>
    )
  }
}

TeachModal.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired
}
export default Form.create()(TeachModal)
