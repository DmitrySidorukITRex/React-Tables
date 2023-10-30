import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { PropsWithChildren, useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TablePagination from './components/Pagination/Pagination';
import './styles.scss';
import PageSizeSelector from './components/PageSizeSelector/PageSizeSelector';
import ColumnsSelector from './components/ColumnsSelector/ColumnsSelector';
import { StudyColumn } from 'features/Studies/AllStudiesTable/models/study';
import { useTheme } from '@mui/material/styles';

interface TableProps<T> {
  data: T[];
  tableColumns: ColumnDef<T>[];
  columns: StudyColumn[];
  onSelectColumn: (column: StudyColumn) => void;
}

const Table = <T extends object>({
  data,
  tableColumns,
  columns,
  onSelectColumn,
}: PropsWithChildren<TableProps<T>>) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data: data,
    columns: tableColumns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const theme = useTheme();

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
      <div className="table-header">
        <PageSizeSelector
          pageSize={table.getState().pagination.pageSize}
          onChangePageSize={onChangePageSize}
        />
        <ColumnsSelector columns={columns} selectColumn={onSelectColumn} />
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    width: header.getSize(),
                    backgroundColor: theme.palette.background.default,
                  }}>
                  {header.isPlaceholder ? null : (
                    <div className="sort-column" onClick={header.column.getToggleSortingHandler()}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getIsSorted() ? (
                        (header.column.getIsSorted() as string) === 'asc' ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )
                      ) : null}
                    </div>
                  )}
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
      <TablePagination
        dataLength={data.length}
        rowsLength={table.getRowModel().rows.length}
        currentPageIndex={pageIndex}
        paginationBtnCount={table.getPageCount()}
        onChangePageIndex={onChangePageIndex}
      />
    </>
  );
};

export default Table;
