import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log({response})
    if(response.status === 200){
return response.data;
    }
  } catch (error) {
     console.error(error);
  }
};
