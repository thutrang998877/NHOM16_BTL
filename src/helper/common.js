import { PRODUCTS } from "../constants/product";

export const getProductById = (id) =>  {
    for (const group of PRODUCTS) {
      for (const product of group) {
        if (product.key == id) {
          return product;
        }
      }
    }
    return null;
  }