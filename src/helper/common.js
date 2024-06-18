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

export const getProductsByCollection = (collection, numOfProducts) => {
  const flattenedProducts = PRODUCTS.flat();

  const filteredProducts = flattenedProducts.filter(product => product.collection === collection);

  return filteredProducts.slice(0, numOfProducts);
}
