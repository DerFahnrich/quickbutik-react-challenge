export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface IOrder {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  products: IProduct[];
  status: string;
}
