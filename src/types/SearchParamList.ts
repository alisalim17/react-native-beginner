import { MutableRefObject } from "react";

interface Product {
  name: string;
}

type EditProduct = { submit?: MutableRefObject<() => void> } & Product;

export type SearchParamList = {
  Search: undefined;
  Product: Product;
  EditProduct: EditProduct;
};
