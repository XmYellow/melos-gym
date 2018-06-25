import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import './LoginView.scss'
import LoginImg from '../assets/4.jpeg'
import { browserHistory } from 'react-router'

const FormItem = Form.Item

class LoginView extends React.Component {
  state = {
    user: {
      email: {value: '', status: '', message: ''},
      password: {value: '', status: '', message: ''},
      remember: true
    },
    load: false
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({load: true})
    const isSubmit = this.regRule('email') && this.regRule('password')
    if (!isSubmit) return
    const user = this.state.user
    const params = {username: user.email.value, password: user.password.value}
    // const {status, msg} = await this.props.loginAsync(params)
    // this.setState({load: false})
    // if (!status) {
    //   const {user} = this.state
    //   user.password.status = 'error'
    //   user.password.message = msg
    //   this.setState(user)
    //   return
    // }
    message.success('登入成功')
    browserHistory.push('/admin')
  }

  onChange = (e, target) => {
    const user = this.state.user
    user[target].value = e.target.value
    this.setState({user})
    this.regRule(target)
  }

  async regRule (target) {
    const user = this.state.user
    if (target === 'email') {
      const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      if (!reg.test(user.email.value)) {
        user.email.status = 'error'
        user.email.message = '请输入有效的邮箱!'
        this.setState({user})
        return false
      }
      // const result = api.get()
      user.email.status = 'success'
      user.email.message = ''
    }
    if (target === 'password') {
      if (user.password.value === '') {
        user.password.status = 'error'
        user.password.message = '请输入密码!'
        this.setState({user})
        return false
      }
      user.password.status = 'success'
      user.password.message = ''
    }
    this.setState({user})
    return true
  }

  checkboxChange = (e) => {
    const user = this.state.user
    user.remember = e.target.checked
    this.setState({user})
  }

  render () {
    const {onChange, checkboxChange} = this
    const {user: {email, password, remember}, load} = this.state
    return (
      <div className="login-box">
        <div className="login-form">
          <img src={LoginImg} className="login-img"/>
          <h1>{remember}</h1>
          <Form onSubmit={this.handleSubmit}>

            <FormItem hasFeedback
                      validateStatus={email.status} help={email.message}>
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                     onChange={e => {onChange(e, 'email')}}
                     placeholder="Username@email.com" value={email.value}/>
            </FormItem>
            <FormItem hasFeedback
                      validateStatus={password.status} help={password.message}>
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     onChange={e => {onChange(e, 'password')}}
                     placeholder="Password" value={password.value}/>
            </FormItem>

            <FormItem>
              <Checkbox defaultChecked={true} onChange={checkboxChange}>Remember me</Checkbox>
              <Button loading={load} type="primary" htmlType="submit" className="login-form-button">
                登 入
              </Button>
              <p>
                <a className="login-form-forgot" href="">Forgot password</a>
                <a href="">register now!</a>
              </p>
            </FormItem>

          </Form>
        </div>
      </div>
    )
  }
}

export default LoginView
