import React, { FC } from 'react'
//  import Layouts from '../components/Layout';
import { Card, Input, Select, DatePicker } from 'antd'

const About: FC = () => {
  return (
    <Card title="About" bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>

        <Input placeholder="Basic usage" />

        <DatePicker.RangePicker />

        <p>&nbsp;</p>

        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select>
    </Card>
  )
}

export default About
