import { IOrder } from ".";
import { Button } from "../Button";

import "./TableRow.css";

interface ITableRowProps {
  data: IOrder;
}

export const TableRow = ({ data }: ITableRowProps): JSX.Element => {
  const handleOnClick = () => {
    alert(`The order with id ${data.id} has been clicked`);
  };

  return (
    <div className="table-row">
      <span className="table-cell">{data.id}</span>
      <span className="table-cell">{new Date(data.created_at).toLocaleDateString()}</span>
      <span className="table-cell">
        {data.first_name} {data.last_name}
      </span>
      <span className="table-cell">{data.products.length}</span>
      <span className="table-cell">
        {data.products.reduce((acc, curr) => {
          return (acc += curr.price);
        }, 0)}
      </span>
      <span className="table-cell">
        <Button onClick={handleOnClick}>View Order</Button>
      </span>
    </div>
  );
};
