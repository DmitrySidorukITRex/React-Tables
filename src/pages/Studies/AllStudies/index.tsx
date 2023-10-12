import { useEffect, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Study } from './models';
import { getAllStudies } from './services';
import './index.css';

const columnHelper = createColumnHelper<Study>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Study Name',
  }),
  columnHelper.accessor('startDate', {
    header: 'Start Date',
  }),
  columnHelper.accessor('type', {
    header: 'Study Types',
  }),
  columnHelper.accessor('models', {
    header: 'Experimental Models',
  }),
  columnHelper.accessor('points', {
    header: 'Data Points',
  }),
  columnHelper.accessor('center', {
    header: 'Center',
  }),
];

const AllStudies = () => {
  const [allStudies, setAllStudies] = useState<Study[]>([]);
  const table = useReactTable({ data: allStudies, columns, getCoreRowModel: getCoreRowModel() });

  useEffect(() => {
    getAllStudies().then((data) => {
      setAllStudies(data);
    });
  });

  return (
    <>
      <h1>All studies</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllStudies;
