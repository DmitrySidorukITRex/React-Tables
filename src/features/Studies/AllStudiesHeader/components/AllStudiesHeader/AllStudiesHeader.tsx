import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { CustomButton } from 'ui/Button';
import './styles.scss';

const AllStudiesHeader = () => {
  const isLoading = useSelector((state: RootState) => state.studies.isLoading);

  return (
    <>
      {!isLoading && (
        <>
          <h1>All Studies</h1>
          <div className="controls">
            <CustomButton>Add Study</CustomButton>
            <CustomButton>Add Study Set</CustomButton>
            <CustomButton variant="outlined">Show Editable Studies Only</CustomButton>
          </div>
        </>
      )}
    </>
  );
};

export default AllStudiesHeader;
