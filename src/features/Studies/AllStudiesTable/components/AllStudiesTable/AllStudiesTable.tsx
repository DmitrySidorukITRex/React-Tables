import { useEffect, useState } from 'react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import Table from 'components/Table/Table';
import Spinner from 'ui/Spinner';
import { Study } from '../../models/study';
import { getAllStudies } from '../../services/allStudies';

const columnHelper = createColumnHelper<Study>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Study Name',
    size: 300,
  }),
  columnHelper.accessor('startDate', {
    header: 'Start Date',
    cell: (info) =>
      new Intl.DateTimeFormat('en-us').formatToParts(info.getValue()).map((part) => {
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
  const [allStudies, setAllStudies] = useState<Study[]>([]);

  useEffect(() => {
    getAllStudies().then((data) => {
      setAllStudies(data);
    });
  });

  return (
    <>
      {allStudies.length ? (
        <>
          <Table data={allStudies} columns={columns as ColumnDef<Study>[]} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default AllStudiesTable;
