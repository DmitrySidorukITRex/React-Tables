import { useEffect, useState } from 'react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { Study } from './models';
import { getAllStudies } from './services';
import Table from 'src/shared/components/Table';

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

  useEffect(() => {
    getAllStudies().then((data) => {
      setAllStudies(data);
    });
  });

  return (
    <>
      <h1>All studies</h1>
      <Table data={allStudies} columns={columns as ColumnDef<Study>[]} />
    </>
  );
};

export default AllStudies;
