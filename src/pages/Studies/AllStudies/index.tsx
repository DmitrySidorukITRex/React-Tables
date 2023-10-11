/* eslint-disable react/display-name */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Study } from './models';
import { getAllStudies } from './services';

interface Column {
  label: string;
  dataKey: keyof Study;
}

const columns: Column[] = [
  { label: 'Study Name', dataKey: 'name' },
  { label: 'Start Date', dataKey: 'startDate' },
  { label: 'Study Types', dataKey: 'type' },
  { label: 'Experimental Models', dataKey: 'models' },
  { label: 'Data Points', dataKey: 'points' },
  { label: 'Center', dataKey: 'center' },
];

const VirtuosoTableComponents: TableComponents<Study> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />,
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align="left"
          sx={{
            backgroundColor: 'background.paper',
          }}>
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Study) {
  return (
    <>
      {columns.map((column) => (
        <TableCell key={column.dataKey} align="left">
          {row[column.dataKey]}
        </TableCell>
      ))}
    </>
  );
}

const AllStudies = () => {
  const [allStudies, setAllStudies] = useState<Study[]>([]);

  useEffect(() => {
    getAllStudies().then((data) => {
      setAllStudies(data);
    });
  });

  return (
    <>
      <h1>All studies</h1>
      <Paper style={{ height: 'calc(100vh - 212px)', width: '100%' }}>
        <TableVirtuoso
          data={allStudies}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
    </>
  );
};

export default AllStudies;
