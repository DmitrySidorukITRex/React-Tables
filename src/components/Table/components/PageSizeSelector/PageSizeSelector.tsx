import './styles.scss';

interface PageSizeSelectorProps {
  pageSize: number;
  onChangePageSize: (x: number) => void;
}

const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({ pageSize, onChangePageSize }) => {
  return (
    <div className="size-selector">
      <span>Show </span>
      <select value={pageSize} onChange={(e) => onChangePageSize(+e.target.value)}>
        {[10, 25, 50, 100].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <span> entries</span>
    </div>
  );
};

export default PageSizeSelector;
