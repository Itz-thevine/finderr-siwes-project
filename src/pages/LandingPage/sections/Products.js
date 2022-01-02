import React from 'react'
import { Row, Col, Button } from 'antd';
import { useSelector } from 'react-redux';

const Products = () => {
  const products = useSelector(state => state.items.products)

  return (
    <div className='products_container'>
      <Row gutter={[32, 16]} justify='center' align='center'>
        {products.map((product, i) => (
          <Col key={i} xs={12} sm={12} md={8} lg={8}>
            <img className='products_img' src={product.img} alt='products' />
            <p>{product.name}</p>
          </Col>
        ))}
      </Row>
      <Button className='more_button'>More Products</Button>
    </div>
  )
}

export default Products;
