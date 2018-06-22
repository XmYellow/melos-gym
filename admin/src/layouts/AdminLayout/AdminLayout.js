import React from 'react'
import { IndexLink, browserHistory } from 'react-router'
import { Layout, Menu, Icon, Dropdown } from 'antd'
import './AdminLayout.scss'
import { exitAuth } from './../../store/auth'
import { connect } from 'react-redux'

const {Header, Sider, Content} = Layout

class AdminLayout extends React.Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  menuClick = ({item, key, keyPath}) => {
    browserHistory.push(`/admin/${key}`)
  }

  menuClickItem = ({item, key, keyPath}) => {
    if (key === '/admin/layout') {
      this.props.exitAuth()
      browserHistory.push('/login')
      localStorage.removeItem('access_token')
      return
    }
    browserHistory.push(`${key}`)
  }

  render () {
    const {menuClick, menuClickItem} = this
    const menu = (
      <Menu onClick={ menuClickItem }>
        <Menu.Item key="/admin/center">
          <a>个人中心</a>
        </Menu.Item>
         <Menu.Item key="/">
          <a>返回首页</a>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="/admin/layout">退出</Menu.Item>
      </Menu>
    )
    return (
      <Layout>
        <Sider
          trigger={ null }
          collapsible
          collapsed={ this.state.collapsed }
        >
          <div className="logo">
            <IndexLink to="/admin">
              <i className="icon icon-aixin"></i>
              <span>后台管理系统</span>
            </IndexLink>

          </div>

          <Menu theme="dark" onClick={ menuClick } mode="inline">
            <Menu.Item key="user">
              <Icon type="user"/>
              <span>用户管理</span>
            </Menu.Item>
            <Menu.Item key="role">
              <Icon type="video-camera"/>
              <span>文章管理</span>
            </Menu.Item>
            <Menu.Item key="course">
              <Icon type="video-camera"/>
              <span>课程管理</span>
            </Menu.Item>
            <Menu.Item key="setting">
              <Icon type="upload"/>
              <span>设置</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="nav-header" style={ {background: '#fff', padding: 0} }>
            <Icon
              className="trigger"
              type={ this.state.collapsed ? 'menu-unfold' : 'menu-fold' }
              onClick={ this.toggle }
            />
            <Dropdown overlay={ menu } trigger={ ['click'] }>
              <a className="ant-dropdown-link" href="javascript: void 0">
                管理员 <Icon type="down"/>
              </a>
            </Dropdown>
          </Header>
          <Content style={ {margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280} }>
            { this.props.children }
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const mapDispatchToProps = {
  exitAuth
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout)
