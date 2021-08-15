import React, { ReactChild, ReactChildren } from 'react'
import { Layout } from 'antd'
import Sider from './Sider'
import styles from './Layouts.module.scss'

const { Header, Footer, Content } = Layout

interface IChildren {
    children: ReactChild | ReactChildren;
}

const Layouts: React.FC<IChildren> = ({ children = '' }) => {
  console.log('render main layout')
  return (
    <Layout className={styles.app}>
        <Sider />
        <Layout className="site-layout" >
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>
  )
}
export default Layouts
