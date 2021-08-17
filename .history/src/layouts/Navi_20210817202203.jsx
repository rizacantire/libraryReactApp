import Layout, { Content, Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'

export default function Navi() {
    return (
        <div>
            <Layout>
                <Header>Başlık</Header>
                <Layout>
                    <Sider>Left Sidebar</Sider>
                    <Content>Content</Content>
                </Layout>
            </Layout>
            
        </div>
    )
}
