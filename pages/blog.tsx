import React, { FC } from 'react'
import { Card, Input, Form, Checkbox, Button, Select, DatePicker } from 'antd'

const App: FC = () => {
  return (
    <Card title="Card title" bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>

        <Input placeholder="Basic usage" />

        <DatePicker.RangePicker />

        <p>&nbsp;</p>

        <Select defaultValue="lucy" style={{ width: 120 }} >
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select>

        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
    </Card>
  )
}

export default App
