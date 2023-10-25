import { useEffect } from 'react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import Table from 'components/Table/Table';
import Spinner from 'ui/Spinner';
import { Study, StudyColumn } from '../../models/study';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import { changeColumnVisibility, fetchAllStudies } from '../../store/studiesSlice';

const columnHelper = createColumnHelper<Study>();

const tableColumns = [
  columnHelper.accessor('name', {
    header: 'Study Name',
    size: 300,
  }),
  columnHelper.accessor('startDate', {
    header: 'Start Date',
    cell: (info) =>
      new Intl.DateTimeFormat('en-us').formatToParts(new Date(info.getValue())).map((part) => {
        if (part.type === 'literal') {
          return '-';
        }

        return part.value;
      }),
    size: 120,
  }),
  columnHelper.accessor('type', {
    header: 'Study Types',
    size: 130,
  }),
  columnHelper.accessor('models', {
    header: 'Experimental Models',
    size: 300,
  }),
  columnHelper.accessor('points', {
    header: 'Data Points',
    size: 130,
  }),
  columnHelper.accessor('center', {
    header: 'Center',
    size: 150,
  }),
];

const AllStudiesTable = () => {
  const allStudies = useSelector((state: RootState) => state.studies.data);
  const isLoading = useSelector((state: RootState) => state.studies.isLoading);
  const columns = useSelector((state: RootState) => state.studies.columns);
  const dispatch = useDispatch<AppDispatch>();
  const availableColumns = tableColumns.filter(
    (x) => columns.find((y) => y.name === x.header)?.isSelected,
  );

  useEffect(() => {
    dispatch(fetchAllStudies());
  }, []);

  const onSelectColumn = (column: StudyColumn) => {
    dispatch(changeColumnVisibility(column));
  };

  return (
    <>
      {!isLoading ? (
        <>
          <Table
            data={allStudies}
            tableColumns={availableColumns as ColumnDef<Study>[]}
            columns={columns}
            onSelectColumn={onSelectColumn}
          />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default AllStudiesTable;
