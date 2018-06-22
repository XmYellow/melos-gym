import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import TopNav from './../../components/TopNav'
import './PageLayout.scss'

const {Header, Footer, Content} = Layout

export const PageLayout = ({children}) => (
  <Layout>
    <Header style={ {padding: 0} }>
      <TopNav/>
    </Header>
    <Content>{ children }</Content>
    <Footer>Footer</Footer>
  </Layout>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
