/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { NavigationItem } from '../models';
import * as Styled from '../styled';

interface DropdownMenuProps {
  navItem: NavigationItem;
  linkClick: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ navItem, linkClick }) => {
  const onLinkClick = () => {
    linkClick();
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
              <NavLink
                key={link.title}
                to={link.url}
                onClick={onLinkClick}
                css={css`
                  display: block;
                  padding: 6px 16px;
                  margin-bottom: 8px;
                  text-decoration: none;
                  color: inherit;
                  &:hover {
                    cursor: pointer;
                    background-color: #e9ecef;
                  }
                `}>
                {link.title}
              </NavLink>
            ))}
          </>
        </div>
      ))}
    </Styled.DropdownMenu>
  );
};

export default DropdownMenu;
