import { Rating } from '@material-ui/lab';
import React from 'react';
import { useStateValue } from '../../State/StateProvider';
import './Product.css'

const Product = ({id, title, price,rating,image}) => {

  const [{basket}, dispatch] = useStateValue()

  const addToBasket = () => {
    // dispatch the item into data layer 
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
        <Rating
          name="simple-controlled"
          value={+rating}
        />
        </div>
      </div>

        <img src={image} alt=""/>

        <button onClick={addToBasket} className="product__button">Add to Basket</button>
    </div>
  );
};

export default Product;