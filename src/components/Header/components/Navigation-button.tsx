/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@mui/material';
import useOnClickOutside from 'hooks/useClickOutside';
import { useRef, useState } from 'react';
import { NavigationItem } from '../models/models';
import DropdownMenu from './Dropdown-menu';

interface NavigationBtnProps {
  navItem: NavigationItem;
}

const NavigationBtn: React.FC<NavigationBtnProps> = ({ navItem }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsShowMenu(false));

  return (
    <div
      ref={ref}
      css={css`
        position: relative;
      `}>
      <Button
        onClick={() => setIsShowMenu((val) => !val)}
        sx={{ my: 2, color: 'white', display: 'block' }}>
        {navItem.title}
      </Button>
      {isShowMenu && <DropdownMenu navItem={navItem} linkClick={() => setIsShowMenu(false)} />}
    </div>
  );
};

export default NavigationBtn;
