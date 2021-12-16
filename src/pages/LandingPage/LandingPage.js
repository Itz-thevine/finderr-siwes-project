import React from 'react'
import { Input, Button, Row, Col } from 'antd';
import './LandingPage.less'
import logo from '../../assets/images/logo.svg';
import furnitures from '../../assets/images/furnitures.png';
import gadgets from '../../assets/images/gadgets.png';
import books from '../../assets/images/books.png';
import wears from '../../assets/images/wears.png';
import decorationItems from '../../assets/images/decoration items.png';
import foodItems from '../../assets/images/food items.png';

function LandingPage() {
  const searches = [
    { img: furnitures, name: 'Furniture' },
    { img: wears, name: 'Wears' },
    { img: gadgets, name: 'Gadgets' },
    { img: books, name: 'Books' },
    { img: foodItems, name: 'Food Items' },
    { img: decorationItems, name: 'Decoration Items' }
  ]
  return (
    <div className='landing_container'>
      <div className='landing_image_background'>
        <img alt='app_logo' src={logo} />
        <p>where the findings happen...</p>
      </div>
      <div className='landing_serach_container'>
        <Input prefix={<img alt='search' src={require('../../assets/images/search.png')} />} placeholder='Enter Product or Service' />
        <Button>Find</Button>
      </div>
      <h2>Popular Searches</h2>
      <div className='search_items'>
        <Row gutter={[16, 16]} justify='center' align='center'>
          {searches.map((item, i) => {
            return (
              <Col key={i} xs={8} sm={8} md={8} lg={8}>
                <div>
                  <img src={item.img} alt='search items' />
                  <p>{item.name}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default LandingPage
