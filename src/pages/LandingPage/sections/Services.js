import React from 'react'
import { Row, Col, Button } from 'antd';
import { useSelector } from 'react-redux';

const Services = () => {
  const services = useSelector(state => state.items.services)

  return (
    <div className='services_container'>
      <Row gutter={[64, 8]} justify='center' align='center'>
        {services.map((service, i) => (
          <Col key={i} xs={12} sm={12} md={8} lg={8}>
            <img className='services_img' src={service.img} alt='services' />
            <p>{service.name}</p>
          </Col>
        ))}
      </Row>
      <Button className='more_button'>More Services</Button>
    </div>
  )
}

export default Services;
