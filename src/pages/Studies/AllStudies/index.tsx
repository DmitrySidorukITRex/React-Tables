import { useEffect, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
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
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const table = useReactTable({
    data: allStudies,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const btnCount = Math.ceil(allStudies.length / pageSize);

  useEffect(() => {
    getAllStudies().then((data) => {
      setAllStudies(data);
    });
  });

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
      <h1>All studies</h1>
      <div className="table-wrapper">
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
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <div className="info">
            Showing 1 to {table.getRowModel().rows.length} of {allStudies.length}
          </div>
          <div className="controls">
            <button
              type="button"
              disabled={!table.getCanPreviousPage()}
              onClick={() => onChangePageIndex(pageIndex - 1)}>
              Previous
            </button>
            {btnCount > 7
              ? Array.from(Array(7).keys()).map((index) => {
                  let btnLabel = (index + 1).toString();
                  let btnValue = index;
                  if (pageIndex < 4) {
                    btnValue = index < 5 ? btnValue : index === 6 ? btnCount - 1 : pageIndex;
                    btnLabel = index === 5 ? '...' : (btnValue + 1).toString();
                  } else if (pageIndex > btnCount - 5) {
                    btnValue = index > 1 ? btnCount - 7 + index : index === 0 ? 0 : pageIndex;
                    btnLabel = index === 1 ? '...' : (btnValue + 1).toString();
                  } else {
                    if (!index) {
                      btnValue = 0;
                    } else if (index === 6) {
                      btnValue = btnCount - 1;
                    } else if (index === 1 || index === 5) {
                      btnValue = pageIndex;
                    } else {
                      btnValue = pageIndex - 3 + index;
                    }
                    btnLabel = index === 1 || index === 5 ? '...' : (btnValue + 1).toString();
                  }

                  return (
                    <button key={index} onClick={() => onChangePageIndex(btnValue)}>
                      {btnLabel}
                    </button>
                  );
                })
              : Array.from(Array(btnCount).keys()).map((index) => (
                  <button key={index} onClick={() => onChangePageIndex(index)}>
                    {index + 1}
                  </button>
                ))}
            <button
              type="button"
              disabled={!table.getCanNextPage()}
              onClick={() => onChangePageIndex(pageIndex + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllStudies;
