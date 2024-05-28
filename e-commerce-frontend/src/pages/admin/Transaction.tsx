import { ReactElement, useCallback, useState } from "react";
import AdminSideBar from "../../components/admin/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";
import { Link } from "react-router-dom";
function Transaction() {
  interface DataTypes {
    user: string;
    amount: number;
    discount: number;
    quantity: number;
    status: ReactElement;
    action: ReactElement;
  }

  const columns: Column<DataTypes>[] = [
    {
      Header: "Avatar",
      accessor: "user",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Discount",
      accessor: "discount",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Action",
      accessor: "action",
    },
  ];

  const arr: DataTypes[] = [
    {
      user: "Charas",
      amount: 4500,
      discount: 400,
      quantity: 3,
      status: <span className="red">Processing</span>,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
    {
      user: "Xavirors",
      amount: 6999,
      discount: 400,
      status: <span className="green">Shipped</span>,
      quantity: 6,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
    {
      user: "Xavirors",
      amount: 6999,
      discount: 400,
      status: <span className="purple">Delivered</span>,
      quantity: 6,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
  ];

  const [data] = useState<DataTypes[]>(arr);

  const Table = useCallback(
    TableHOC<DataTypes>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true
    ),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSideBar />
      <main>{Table()}</main>
    </div>
  );
}

export default Transaction;
