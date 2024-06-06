import React, { useEffect, useState } from 'react';
import style from './card.module.scss';
import { getProducts } from '../../axios/auth';
import { useDispatch } from 'react-redux';
import { setCartItems } from '../../redux/counter/counterSlice'; 

const Cards = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        console.log({ products });
        if (products) {
          setData(products);
        } else {
          console.log("Cart API response is empty");
        }
      } catch (error) {
        console.log("Unable to fetch API data or store it in state", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    
    dispatch(setCartItems(product));
  };

  return (
    <div>
      <div className={style.productList}>
        {data.map((product) => (
          <div key={product.id} className={style.product}>
            <div className={style.picdiv}>
              <img src={product.image} alt="" className={style.cardpic} />
            </div>
            <div className={style.pricenamesetting}>
              <h2 className={style.itemname}>{product.title}</h2>
              <div className={style.butndiv}>
                <p className={style.itemprice}>Price: ${product.price}</p>
                <button className={style.btnedit} onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
