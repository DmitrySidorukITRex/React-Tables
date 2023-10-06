/** @jsxImportSource @emotion/react */
import { Button } from '@mui/material';
import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { NavigationItem } from '../models';
import useOnClickOutside from '../../../shared/hooks/useClickOutside';
import DropdownMenu from './dropdown-menu';

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
      {isShowMenu && <DropdownMenu navItem={navItem} />}
    </div>
  );
};

export default NavigationBtn;