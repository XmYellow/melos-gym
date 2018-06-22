import React from 'react'
import { Table, Icon, Divider } from 'antd'

const columns = [{
  title: 'id',
  dataIndex: 'role_id',
  key: 'role_id',
}, {
  title: '角色名',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{ text }</a>,
}, {
  title: '角色描述',
  dataIndex: 'email',
  key: 'email',
}, {
  title: '管理',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">修改</a>
      <Divider type="vertical"/>
      <a href="#">删除</a>
    </span>
  ),
}]

const data = [{
  key: '1',
  name: 'John Brown',
  role_id: 32,
  email: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  role_id: 42,
  email: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  role_id: 32,
  email: 'Sidney No. 1 Lake Park',
}]

class RoleView extends React.Component {
  
  render () {
    return (
      <div className="admin-user">
        <h2>角色管理 <Icon type="user"/></h2>
        <Table columns={ columns } dataSource={ data }/>
      </div>
    )
  }
  
}

export default RoleView
