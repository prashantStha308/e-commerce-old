"use client";

import { createContext, useContext } from 'react';

// Create a Product Context with an empty array as the default value
export const ProductContext = createContext([]);

export const useProduct = () => useContext(ProductContext);