import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import './styles.scss';

const AllStudiesHeader = () => {
  const isLoading = useSelector((state: RootState) => state.studies.isLoading);

  return (
    <>
      {!isLoading && (
        <>
          <h1>All Studies</h1>
          <div className="contorls">
            <button type="button">Add Study</button>
            <button type="button">Add Study Set</button>
            <button type="button">Show Editable Studies Only</button>
          </div>
        </>
      )}
    </>
  );
};

export default AllStudiesHeader;
