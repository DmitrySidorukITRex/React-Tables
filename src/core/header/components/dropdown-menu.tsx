/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavigationItem } from '../models';
import * as Styled from '../styled';

interface DropdownMenuProps {
  navItem: NavigationItem;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ navItem }) => {
  const onLinkClick = () => {
    console.log('link click');
  };

  return (
    <Styled.DropdownMenu>
      {navItem.linksGroups.map((group) => (
        <div
          key={group.title}
          css={css`
            &:not(:last-child) {
              margin-bottom: 8px;
              border-bottom: 1px solid rgba(0, 0, 0, 0.15);
            }
          `}>
          <>
            <div
              css={css`
                padding: 6px 16px;
                font-weight: 700;
                color: #6c757d;
              `}>
              {group.title}
            </div>
            {group.links.map((link) => (
              <div
                key={link.title}
                onClick={onLinkClick}
                css={css`
                  padding: 6px 16px;
                  margin-bottom: 8px;
                  &:hover {
                    cursor: pointer;
                    background-color: #e9ecef;
                  }
                `}>
                {link.title}
              </div>
            ))}
          </>
        </div>
      ))}
    </Styled.DropdownMenu>
  );
};

export default DropdownMenu;
