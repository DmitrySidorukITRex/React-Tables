import CircularProgress from '@mui/material/CircularProgress';
import './styles.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <CircularProgress />
    </div>
  );
};

export default Spinner;
