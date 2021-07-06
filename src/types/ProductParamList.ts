import { MutableRefObject } from "react";

interface Product {
  name: string;
}

type EditProduct = { submit?: MutableRefObject<() => void> } & Product;

export type ProductParamList = {
  Product: Product;
  EditProduct: EditProduct;
};
