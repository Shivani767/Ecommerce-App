import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import styled, { keyframes } from "styled-components";
import "./shop.css";

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  min-height: 100vh;
`;

const glow = keyframes`
  0% {
    text-shadow: 0 0 5px #42a5f5, 0 0 10px #42a5f5, 0 0 20px #42a5f5;
  }
  50% {
    text-shadow: 0 0 15px #42a5f5, 0 0 30px #42a5f5, 0 0 45px #42a5f5;
  }
  100% {
    text-shadow: 0 0 5px #42a5f5, 0 0 10px #42a5f5, 0 0 20px #42a5f5;
  }
`;

const ShopTitle = styled.h1`
  font-size: 4rem;
  font-family: 'Roboto', sans-serif;
  color: #0d47a1;
  animation: ${glow} 3s infinite;
  margin-bottom: 40px;
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const Shop = () => {
  return (
    <ShopContainer>
      <ShopTitle>MarketMax</ShopTitle>
      <ProductsGrid>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </ProductsGrid>
    </ShopContainer>
  );
};
