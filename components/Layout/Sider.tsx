import React from 'react'
import { Layout, Menu } from 'antd'
import Link from 'next/link'

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  DashboardOutlined,
  WindowsOutlined
} from '@ant-design/icons'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
// import { AnnotationIcon } from '@heroicons/react/outline'

// import styles  from './Sider.module.scss';

/*
const T = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
  )
}
*/

const Sider: React.FC = () => {
// const router = useRouter();
  console.log('render side bar')
  return (
    <Layout.Sider
        theme="dark"
        width={250}
        collapsed={false}
        >
      <SimpleBar style={{ maxHeight: '100vh' }}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<WindowsOutlined />}>
          <Link href="/blog">
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<WindowsOutlined />}>
        <Link href="/about">
            About
          </Link>
        </Menu.Item>
        <Menu.ItemGroup key="g1" title="Transaction & Payments">
            <Menu.Item key="g11" icon={<BarChartOutlined/>}>Option 1</Menu.Item>
            <Menu.Item key="g12" icon={<CloudOutlined/>}>Option 2</Menu.Item>
            <Menu.Item key="g13" icon={<BarChartOutlined/>}>Option 1</Menu.Item>
            <Menu.Item key="g14" icon={<CloudOutlined/>}>Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two" popupClassName={'popup-dark'}>
          <Menu.Item key="sub25" icon={<ShopOutlined/>}>Option 5</Menu.Item>
          <Menu.Item key="sub26">Option 6</Menu.Item>
          <Menu.SubMenu key="sub3" title="Submenu" popupClassName={'popup-dark'}>
            <Menu.Item key="sub37">Option 7</Menu.Item>
            <Menu.Item key="sub38">Option 8</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
      </SimpleBar>
    </Layout.Sider>
  )
}

export default Sider
