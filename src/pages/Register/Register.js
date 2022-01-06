import React from 'react'
import { Row, Col, Form, Select, Input, Switch, Button } from 'antd'
import './Register.css'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import { LeftOutlined } from '@ant-design/icons'

function Register() {
  return (
    <div className='register_con'>
      <Row gutter={[16, 16]} justify='center' align='center'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className='big_text_con'>
            <p className='register_big_text'>It’s time to let your business be found easily.</p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Form className='register_form'>
            <h2>Tell us about your business.</h2>
            <p>This is an initial information about your business.<br />
              You can change or update it anytime.</p>
            <Input placeholder='Business Name' />
            <Select className='form_item' placeholder='Section'>
              <Select.Option>Option 1</Select.Option>
              <Select.Option>Option 2</Select.Option>
              <Select.Option>Option 3</Select.Option>
            </Select>
            <Input.TextArea className='form_item' placeholder='About your business' />
            <Input placeholder='Phone Number' />
            <Input placeholder='Whatsapp Number' />
            <Input className='form_item' placeholder='Website' suffix={<Switch />} />
            <p className='form_item' ><Checkbox /> This business is registered (CAC/SMEDAN)</p>
            <Input placeholder='Company Legal Name' />
            <Input placeholder='Company registration number/Unique Identification number' />
            <Input placeholder='Address' />
            <p className='form_footer'><span><LeftOutlined /> Go Back</span> <Button>Save and continue</Button></p>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Register
