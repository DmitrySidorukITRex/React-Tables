import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { PropsWithChildren, useEffect, useState } from 'react';
import TablePagination from './Pagination';
import './styles.css';

interface MenuProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

const Table = <T extends object>({ data, columns }: PropsWithChildren<MenuProps<T>>) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const paginationBtnCount = Math.ceil(data.length / pageSize);

  useEffect(() => {
    table.setPageSize(pageSize);
  }, [pageSize]);

  useEffect(() => {
    table.setPageIndex(pageIndex);
  }, [pageIndex]);

  const onChangePageSize = (val: number): void => {
    setPageSize(val);
    setPageIndex(0);
  };

  const onChangePageIndex = (index: number): void => {
    setPageIndex(index);
  };

  return (
    <>
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => onChangePageSize(+e.target.value)}>
        {[10, 25, 50, 100].map((size) => (
          <option key={size} value={size}>
            Show {size}
          </option>
        ))}
      </select>
      <div className="table">
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
      <TablePagination
        dataLength={data.length}
        rowsLength={table.getRowModel().rows.length}
        currentPageIndex={pageIndex}
        paginationBtnCount={paginationBtnCount}
        onChangePageIndex={onChangePageIndex}
      />
    </>
  );
};

export default Table;
