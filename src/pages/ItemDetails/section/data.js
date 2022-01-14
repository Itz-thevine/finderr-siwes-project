import MapImg from '../../../assets/images/map.png'
import BusinessImg from '../../../assets/images/business.png'
import star from '../../../assets/images/star.png'

export const dataSource = [
  {
    key: '1',
    business: {
      name: 'REVAX FITNESS HOUSE',
      image: BusinessImg,
      star: 4
    },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    address: 'Mayfair, behind okuro waters.',
    contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
    map: <img src={MapImg} alt='map' />
  },
  {
    key: '2',
    business: {
      name: 'REVAX FITNESS HOUSE',
      image: BusinessImg,
      star: 4
    },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    address: 'Mayfair, behind okuro waters.',
    contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
    map: <img src={MapImg} alt='map' />
  },
  {
    key: '3',
    business: {
      name: 'REVAX FITNESS HOUSE',
      image: BusinessImg,
      star: 4
    },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    address: 'Mayfair, behind okuro waters.',
    contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
    map: <img src={MapImg} alt='map' />
  },
  {
    key: '4',
    business: {
      name: 'REVAX FITNESS HOUSE',
      image: BusinessImg,
      star: 4
    },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    address: 'Mayfair, behind okuro waters.',
    contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
    map: <img src={MapImg} alt='map' />
  },
  {
    key: '4',
    business: {
      name: 'REVAX FITNESS HOUSE',
      image: BusinessImg,
      star: 4
    },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    address: 'Mayfair, behind okuro waters.',
    contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
    map: <img src={MapImg} alt='map' />
  },
  {
    key: '4',
    business: {
      name: 'REVAX FITNESS HOUSE',
      image: BusinessImg,
      star: 4
    },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    address: 'Mayfair, behind okuro waters.',
    contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
    map: <img src={MapImg} alt='map' />
  },
  {
    key: '4',
    business: {
      name: 'REVAX FITNESS HOUSE',
      image: BusinessImg,
      star: 4
    },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    address: 'Mayfair, behind okuro waters.',
    contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
    map: <img src={MapImg} alt='map' />
  },
  {
    key: '4',
    business: {
      name: 'REVAX FITNESS HOUSE',
      image: BusinessImg,
      star: 4
    },
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    address: 'Mayfair, behind okuro waters.',
    contact: '+234 90 3690 8590 loremipsum@gmail.com www.lorem.com',
    map: <img src={MapImg} alt='map' />
  }
]

export const columns = [
  {
    title: 'BUSINESS',
    dataIndex: 'business',
    key: 'business',
    render: business => (
      <div className='business_title' >
        <img src={business.image} alt='business' />
        <div style={{ marginLeft: 10 }}>
          <h3 >{business.name}</h3>
          <p>
            {[1, 2, 3, 4, 5].map(() => (
              <img width={15} height={15} src={star} alt='star' />
            ))}
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'DETAILS',
    dataIndex: 'details',
    key: 'details'
  },
  {
    title: 'ADDRESS',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'CONTACT',
    dataIndex: 'contact',
    key: 'contact'
  },
  {
    title: 'MAP',
    dataIndex: 'map',
    key: 'map'
  }
]