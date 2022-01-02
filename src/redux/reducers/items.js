// products...
import furnitures from '../../assets/images/products images/furniture_full.png';
import gadgets from '../../assets/images/products images/gadgets_full.png';
import books from '../../assets/images/products images/books_full.png';
import wears from '../../assets/images/products images/wears_full.png';
import decorationItems from '../../assets/images/products images/decoration_items_full.png';
import foodItems from '../../assets/images/products images/food-items_full.png';
import electronics from '../../assets/images/products images/electronics_full.png';
import food from '../../assets/images/products images/food_full.png';
import sportsEquipment from '../../assets/images/products images/sports_equipments_full.png'

// services...
import gadgetsRepair from '../../assets/images/services images/gadgets_repair.png';
import fashion from '../../assets/images/services images/fashion_design.png';
import facial from '../../assets/images/services images/facial_makeup.png';
import barbing from '../../assets/images/services images/barbing.png';
import decoration from '../../assets/images/services images/decoration.png';
import laundry from '../../assets/images/services images/laundry.png';
import electronicsRepair from '../../assets/images/services images/electronics_repair.png';
import gym from '../../assets/images/services images/gym.png';
import hair from '../../assets/images/services images/hair_style.png'

const initialState = {
  products: [
    { img: gadgets, name: 'Gadgets' },
    { img: wears, name: 'Wears' },
    { img: food, name: 'Food' },
    { img: books, name: 'Books' },
    { img: furnitures, name: 'Furniture' },
    { img: foodItems, name: 'Food Items' },
    { img: electronics, name: 'Electronics' },
    { img: decorationItems, name: 'Decoration Items' },
    { img: sportsEquipment, name: 'Sports Equipments' },
  ],
  services: [
    { img: gadgetsRepair, name: 'Gadgets repair' },
    { img: fashion, name: 'Fashion Designing' },
    { img: facial, name: 'Facial Make-up' },
    { img: hair, name: 'Hair styling' },
    { img: barbing, name: 'Barbing' },
    { img: laundry, name: 'Laundry' },
    { img: electronicsRepair, name: 'Electronics repair' },
    { img: decoration, name: 'Decoration' },
    { img: gym, name: 'Gym' },
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer
