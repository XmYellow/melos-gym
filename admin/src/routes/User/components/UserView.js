import React from 'react'
import { Tooltip, Table, Icon, Divider, Button } from 'antd'
import UserModal from './UserModal'
import './UserView.scss'

class UserView extends React.Component {
  componentWillMount () {
    console.log(this.props.router)
    const {page_index = 0, page_size = 10} = this.props.router.location.query
    this.props.getUsers(page_index, page_size)
  }

  state = {visible: false, loading: false,}
  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    })
  }
  handleOk = async (e) => {
    await this.props.getUsers()
    this.setState({
      visible: false,
    })
  }
  pageTurn = () => {
    const path = this.props.router.location.pathname
    this.props.router.push(path, {query: {'page_index': 2, 'page_size': 5}})
  }

  render () {
    // const {list} = this.props.users
    const list = [{
      id: 1,
      username: 'hello',
      wechat: 'wechat-asd123123123',
      phone: '18293728123',
      vip: '包年会员',
      endTime: '2013-01-22 至 2014-01-22'
    }]
    const {visible, loading} = this.state
    const {showModal, handleCancel, handleOk, pageTurn} = this
    const columns = [{title: 'ID', dataIndex: 'id', key: 'id'},
      {
        title: '用户名', dataIndex: 'username', key: 'username',
        render: text => <Tooltip placement="top" title={text}>
          <a onClick={pageTurn} href="javascript:void 0">{text}</a></Tooltip>,
      },
      {title: '微信', dataIndex: 'wechat', key: 'wechat'},
      {title: '手机', dataIndex: 'phone', key: 'phone'},
      {title: '会员', dataIndex: 'vip', key: 'vip'},
      {title: '会员时间', dataIndex: 'endTime', key: 'endTime'},
      {
        title: '管理',
        key: 'action',
        render: (text, record) => (<span><a onClick={showModal}>修改</a><Divider type="vertical"/><a href="#">删除</a></span>),
      }
    ]
    return (
      <div className="admin-user">
        <div className="table-head">
          <h2>用户管理 <Icon type="user"/></h2>
          <Button onClick={showModal} type="dashed" className="table-add">
            <Icon type="plus-circle-o"/> 新增用户
          </Button>
        </div>
        <Table columns={columns} dataSource={list} rowKey={'id'}/>

        <UserModal handleCancel={handleCancel} handleOk={handleOk} addUser={this.props.addUser}
                   visible={visible} loading={loading}/>
      </div>
    )
  }
}

export default UserView
