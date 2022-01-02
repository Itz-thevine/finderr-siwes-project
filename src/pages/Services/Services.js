import React from 'react'
import { Input, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux'
import searchImg from '../../assets/images/search.png';

function Services() {
  const services = useSelector(state => state.items.services)

  return (
    <div className='landing_container'>
      <div className='landing_item_background'>
        <p>FINDERR</p>
      </div>
      <div className='landing_serach_container'>
        <Input prefix={<img alt='search' src={searchImg} />} placeholder='Enter Service Keyword' />
        <Button>Find</Button>
      </div>
      <div className='services_container'>
        <Row gutter={[64, 8]} justify='center' align='center'>
          {services.map((service, i) => (
            <Col key={i} xs={24} sm={12} md={12} lg={8}>
              <img className='services_img' src={service.img} alt='services' />
              <p>{service.name}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Services
