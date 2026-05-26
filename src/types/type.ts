export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export interface CartItemType extends Product {
  quantity: number;
}