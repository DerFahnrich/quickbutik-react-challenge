import "./TableHeader.css";

export const TableHeader = (): JSX.Element => {
  const tableHeaders: string[] = [
    "Order number",
    "Date",
    "Full name",
    "Number of products",
    "Sum",
    "",
  ];

  return (
    <div className="table-header">
      {tableHeaders.map((th) => (
        <span className="table-head" key={th}>
          {th}
        </span>
      ))}
    </div>
  );
};
