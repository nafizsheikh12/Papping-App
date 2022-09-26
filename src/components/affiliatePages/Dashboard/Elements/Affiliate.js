import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: '1', col2: 'World', col3: '250', col4: '300' },
  { id: 2, col1: '2', col2: 'is Awesome', col3: '250', col4: '300' },
  { id: 3, col1: '3', col2: 'is Amazing', col3: '250', col4: '300' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Id', width: "100" },
  { field: 'col2', headerName: 'Affiliate', width: '200' },
  { field: 'col3', headerName: 'Click', width: "100" },
  { field: 'col4', headerName: 'Conversion', width: '100' },
];

export default function Affiliate() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
