import { Table, TableCell, TableRow } from "flowbite-react";

const CustomTableRow = ({ data, index, style, handleDeleteUser, handleEditUser }) => {
  const row = data[index];
  return (
    <TableRow key={row.id}>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.username}</TableCell>
      <TableCell>{row.role}</TableCell>
      <TableCell>
        <MdDelete
          className="font-medium text-red-500 hover:underline cursor-pointer"
          onClick={() => handleDeleteUser(row.id)}
        />
      </TableCell>
      <TableCell>
        <LiaEditSolid
          className="text-teal-500 hover:underline cursor-pointer"
          onClick={() => handleEditUser(row)}
        />
      </TableCell>
    </TableRow>
  );
};