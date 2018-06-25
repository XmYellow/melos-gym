import React from 'react'
import { Table, Icon, Divider } from 'antd'

const columns = [{
  title: 'id',
  dataIndex: 'role_id',
  key: 'role_id',
}, {
  title: '套餐名字',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '原价',
  dataIndex: 'price',
  key: 'price',
}, {
  title: '现价',
  dataIndex: 'nowPrice',
  key: 'nowPrice',
}, {
  title: '管理',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">修改</a>
    </span>
  ),
}]

const data = [{
  key: '1',
  name: '包月套餐',
  role_id: 1,
  price: 123,
  nowPrice: 100,
}, {
  key: '2',
  name: '包年套餐',
  role_id: 2,
  price: 123,
  nowPrice: 23,
}]

class PriceView extends React.Component {

  render () {
    return (
      <div className="admin-user">
        <h2>套餐管理 <Icon type="user"/></h2>
        <Table columns={columns} dataSource={data}/>
      </div>
    )
  }

}

export default PriceView
