import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { StudyColumn } from 'features/Studies/AllStudiesTable/models/study';
import { useState } from 'react';
import { CustomButton } from 'ui/Button';
import './styles.scss';

interface ColumnsSelectorProps {
  columns: StudyColumn[];
  selectColumn: (column: StudyColumn) => void;
}

const ColumnsSelector: React.FC<ColumnsSelectorProps> = ({ columns, selectColumn }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomButton variant="outlined" onClick={handleClick}>
        <SettingsIcon />
      </CustomButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {columns.map((column) => {
          return (
            <MenuItem key={column.name} onClick={() => selectColumn(column)}>
              <input type="checkbox" checked={column.isSelected} readOnly />
              {column.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ColumnsSelector;
