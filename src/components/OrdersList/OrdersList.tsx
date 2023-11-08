import { useEffect, useState } from "react";
import { getOrders } from "../../api/api";
import { Button } from "../Button";
import { IOrder, TableHeader, TableRow } from ".";

import "./OrdersList.css";

export function OrdersList() {
  const [orders, setOrders] = useState<IOrder[] | null>(null);

  const getOrdersAsync = async () => {
    const orders: IOrder[] = await getOrders();
    console.log(orders);
    setOrders(orders);
  };

  const handleOnClick = () => {
    alert("Hey");
  };

  useEffect(() => {
    getOrdersAsync();
  }, []);

  if (orders === null) {
    return (
      <>
        <h1>Orders List</h1>
        <div>Loading..</div>
      </>
    );
  }

  return (
    <>
      <h1>Orders List</h1>
      <div className="table-container">
        <TableHeader />
        {orders.map((order) => (
          <TableRow data={order} key={order.id} />
        ))}
      </div>
    </>
  );
}
