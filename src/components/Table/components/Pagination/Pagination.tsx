import { CustomButton } from 'ui/Button';
import './styles.scss';

interface TablePaginationProps {
  dataLength: number;
  rowsLength: number;
  currentPageIndex: number;
  paginationBtnCount: number;
  onChangePageIndex: (x: number) => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({
  dataLength,
  rowsLength,
  currentPageIndex,
  paginationBtnCount,
  onChangePageIndex,
}) => {
  const paginationButtons =
    paginationBtnCount > 7
      ? Array.from(Array(7).keys()).map((index) => {
          const btnSettings = getBtnSettings(index);
          return (
            <CustomButton
              key={index}
              variant="outlined"
              className={+btnSettings.label - 1 === currentPageIndex ? 'active' : ''}
              size="small"
              onClick={() => onChangePageIndex(btnSettings.value)}>
              {btnSettings.label}
            </CustomButton>
          );
        })
      : Array.from(Array(paginationBtnCount).keys()).map((index) => (
          <CustomButton
            key={index}
            variant="outlined"
            size="small"
            onClick={() => onChangePageIndex(index)}>
            {index + 1}
          </CustomButton>
        ));

  function getBtnSettings(index: number): { label: string; value: number } {
    let btnLabel = (index + 1).toString();
    let btnValue = index;
    if (currentPageIndex < 4) {
      btnValue = index < 5 ? btnValue : index === 6 ? paginationBtnCount - 1 : currentPageIndex;
      btnLabel = index === 5 ? '...' : (btnValue + 1).toString();
    } else if (currentPageIndex > paginationBtnCount - 5) {
      btnValue = index > 1 ? paginationBtnCount - 7 + index : index === 0 ? 0 : currentPageIndex;
      btnLabel = index === 1 ? '...' : (btnValue + 1).toString();
    } else {
      if (!index) {
        btnValue = 0;
      } else if (index === 6) {
        btnValue = paginationBtnCount - 1;
      } else if (index === 1 || index === 5) {
        btnValue = currentPageIndex;
      } else {
        btnValue = currentPageIndex - 3 + index;
      }
      btnLabel = index === 1 || index === 5 ? '...' : (btnValue + 1).toString();
    }

    return { label: btnLabel, value: btnValue };
  }

  return (
    <div className="pagination">
      <div>
        Showing 1 to {rowsLength} of {dataLength}
      </div>
      <div>
        <CustomButton
          variant="outlined"
          disabled={currentPageIndex === 0}
          size="small"
          onClick={() => onChangePageIndex(currentPageIndex - 1)}>
          Previous
        </CustomButton>
        {paginationButtons}
        <CustomButton
          variant="outlined"
          disabled={currentPageIndex === paginationBtnCount - 1}
          size="small"
          onClick={() => onChangePageIndex(currentPageIndex + 1)}>
          Next
        </CustomButton>
      </div>
    </div>
  );
};

export default TablePagination;
