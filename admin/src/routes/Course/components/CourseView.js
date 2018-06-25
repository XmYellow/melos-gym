import React from 'react'
import { Table, Icon, Divider, Button } from 'antd'
import CourseModal from './CourseModel.js'
const columns = [{
  title: 'id',
  dataIndex: 'role_id',
  key: 'role_id',
}, {
  title: '标题',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '文章地址',
  dataIndex: 'email',
  key: 'email',
}, {
  title: '日期',
  dataIndex: 'day',
  key: 'day',
}, {
  title: '星期',
  dataIndex: 'time',
  key: 'time',
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
  day: '2018-03-11',
  time: '周一',
  email: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  role_id: 42,
  day: '2018-03-11',
  time: '周二',
  email: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  role_id: 32,
  day: '2018-03-11',
  time: '周三',
  email: 'Sidney No. 1 Lake Park',
}]

class CourseView extends React.Component {
  componentWillMount () {
    // console.log(this.props.router)
    // const {page_index = 0, page_size = 10} = this.props.router.location.query
    // this.props.getUsers(page_index, page_size)
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
    const {visible, loading} = this.state
    const {showModal, handleCancel, handleOk, pageTurn} = this
    return (
      <div className="admin-user">
        <div className="table-head">
          <h2>课程管理 <Icon type="user"/></h2>
          <Button onClick={showModal} type="dashed" className="table-add">
            <Icon type="plus-circle-o"/> 新增课程
          </Button>
        </div>
        <Table columns={columns} dataSource={data}/>
        <CourseModal handleCancel={handleCancel} handleOk={handleOk} addUser={this.props.addUser}
                      visible={visible} loading={loading}/>
      </div>
    )
  }

}

export default CourseView
