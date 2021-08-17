import Layout, { Header,Sider,Footer,Content } from 'antd/lib/layout/layout'
import React from 'react'

export default function Navi() {
    return (
        <div>
            <Layout>
  <Header>header</Header>
  <Layout>
    <Sider>left sidebar</Sider>
    <Content>main content</Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout>
            
        </div>
    )
}
