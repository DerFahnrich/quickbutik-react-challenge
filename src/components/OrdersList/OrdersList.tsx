// use this function to fetch the orders.
import { useEffect, useState } from "react";
import { getOrders } from "../../api/api";
import { Button } from "../Button";

interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface IOrder {
  createdAt: string;
  first_name: string;
  id: number;
  products: IProduct[];
  status: string;
}

export function OrdersList() {
  const [orders, setOrders] = useState<IOrder[] | null>(null);

  const getOrdersAsync = async () => {
    const orders: IOrder[] = await getOrders();
    setOrders(orders);
  };

  const handleOnClick = () => {
    alert("Hey");
  };

  useEffect(() => {
    getOrdersAsync();
  }, []);

  return (
    <>
      <h1>Orders List</h1>
      <Button onClick={handleOnClick}>View order</Button>
    </>
  );
}
