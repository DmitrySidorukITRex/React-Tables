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
            <button
              key={index}
              className={+btnSettings.label - 1 === currentPageIndex ? 'active' : ''}
              onClick={() => onChangePageIndex(btnSettings.value)}>
              {btnSettings.label}
            </button>
          );
        })
      : Array.from(Array(paginationBtnCount).keys()).map((index) => (
          <button key={index} onClick={() => onChangePageIndex(index)}>
            {index + 1}
          </button>
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
        <button
          type="button"
          disabled={currentPageIndex === 0}
          onClick={() => onChangePageIndex(currentPageIndex - 1)}>
          Previous
        </button>
        {paginationButtons}
        <button
          type="button"
          disabled={currentPageIndex === paginationBtnCount - 1}
          onClick={() => onChangePageIndex(currentPageIndex + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
