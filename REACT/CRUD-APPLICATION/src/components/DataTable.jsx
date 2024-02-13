import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// CSS styles
const styles = `
  .MuiDataGrid-cell--withFocus {
    outline: none !important;
  }
  .MuiDataGrid-root .MuiDataGrid-row:hover {
    background-color: #f0f0f0;
  }
  .MuiDataGrid-root .MuiDataGrid-row:nth-of-type(even) {
    background-color: white;
  }
  .MuiDataGrid-root .MuiDataGrid-row:nth-of-type(odd) {
    background-color: #f0f0f0;
  }
  .MuiDataGrid-colCell {
    background-color: #4CAF50 !important; // Green color for header
    color: white !important; // White text color for header
  }
`;

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 2,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    sortable: false,
    headerClassName: 'header-column', // Apply custom class to the header column
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <style>{styles}</style>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
}
