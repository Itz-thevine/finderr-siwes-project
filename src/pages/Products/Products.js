import React from 'react'
import { Input, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import searchImg from '../../assets/images/search.png';

function Products() {
  const products = useSelector(state => state.items.products)

  return (
    <div className='landing_container'>
      <div className='landing_item_background'>
        <p>FINDERR</p>
      </div>
      <div className='landing_serach_container'>
        <Input prefix={<img alt='search' src={searchImg} />} placeholder='Enter Product Keyword' />
        <Button>Find</Button>
      </div>
      <div className='products_container'>
        <Row gutter={[64, 8]} justify='center' align='center'>
          {products.map((product, i) => (
            <Col key={i} xs={12} sm={12} md={8} lg={8}>
              <img className='products_img' src={product.img} alt='products' />
              <p>{product.name}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Products
