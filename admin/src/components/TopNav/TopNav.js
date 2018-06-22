import React from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
import { Menu, Icon, Button } from 'antd'
import './TopNav.scss'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class TopNav extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  }

  render () {
    const {topNav: {load, username, is_admin}} = this.props
    const Login = <Button className="login-btn" type="danger" size="large"><Link to="/login">
      <Icon type="user-add"/>login</Link></Button>
    const User = <Link className="user-info" to={is_admin ? '/admin' : '/center'}>{username}</Link>
    return (
      <div className="container relative">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="logo">
            <IndexLink to="/"><Icon type="smile-o"/>Flask-react</IndexLink>
          </Menu.Item>
          <Menu.Item key="github">
            <a href="https://github.com/HuaRongSAO" target="_blank" rel="noopener noreferrer">
              <i className="icon icon-GitHub"></i>GitHub
            </a>
          </Menu.Item>
          <Menu.Item key="mail">
            <a href="https://www.jianshu.com/u/54f00e4dcf6e" target="_blank" rel="noopener noreferrer">
              <Icon type="database"/>blog
            </a>
          </Menu.Item>
        </Menu>
        {load ? User : Login}
      </div>
    )
  }
}

const mapDispatchToProps = {}
const mapStateToProps = (state) => ({topNav: state.auth.user})
export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
