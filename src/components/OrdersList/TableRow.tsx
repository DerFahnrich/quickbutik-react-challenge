import { IOrder } from ".";
import { Button } from "../Button";

import "./TableRow.css";

interface ITableRowProps {
  data: IOrder;
}

export const TableRow = ({ data }: ITableRowProps): JSX.Element => {
  const handleOnClick = () => {
    console.log("Clicked: ", data.id);
  };

  return (
    <div className="table-row">
      <span className="table-cell">{data.id}</span>
      <span className="table-cell">{data.created_at}</span>
      <span className="table-cell">
        {data.first_name} {data.last_name}
      </span>
      <span className="table-cell">{data.products.length}</span>
      <span className="table-cell">
        {data.products.reduce((acc, curr) => {
          return (acc += curr.price);
        }, 0)}
      </span>
      <Button onClick={handleOnClick}>View Order</Button>
    </div>
  );
};
