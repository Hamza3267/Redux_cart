import React from 'react';
import style from './cart.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItems,setCartItems } from '../../redux/counter/counterSlice'; 

const Cart = () => {
  const cart_items = useSelector((state) => state.cart.cart_items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeCartItems(product));
  };
  const handleAddFromCart = (product) => {
    dispatch(setCartItems(product));
  
  };

  return (
    <div className={style.maincartdiv}>
      <div className={style.productList}>
        {cart_items.length > 0 ? (
          cart_items.map((product) => (
            <div key={product.id} className={style.product}>
              <div className={style.picdiv}>
                <img src={product.image} alt="" className={style.cardpic} />
              </div>
              <div className={style.pricenamesetting}>
                <h2 className={style.itemname}>{product.title}</h2>
                <p className={style.itemdesc}>Description: {product.description}</p>
                <div className={style.butndiv}>
                  <p className={style.itemprice}>Price: ${product.price}</p>
                  <p className={style.itemprice}>qty:{product.quantity}</p>
                  <button className={style.butoneditsss} onClick={() => handleRemoveFromCart(product)}>remove-item</button>
                  <button className={style.butoneditss} onClick={() => handleAddFromCart(product)}>add-item</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
