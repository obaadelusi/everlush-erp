import { createContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/products')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return <ProductsContext.Provider value={{ data }}>{children}</ProductsContext.Provider>;
};

export default ProductsContext;
