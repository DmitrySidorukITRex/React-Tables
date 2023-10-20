/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AdbIcon from '@mui/icons-material/Adb';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate('/');
  };

  return (
    <div
      onClick={onLogoClick}
      css={css`
        display: flex;
        align-items: center;
        cursor: pointer;
      `}>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="span"
        sx={{
          mr: 3,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}>
        LOGO
      </Typography>
    </div>
  );
};

export default Logo;
