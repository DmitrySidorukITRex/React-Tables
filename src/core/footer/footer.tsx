/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as Styled from './styled';

function Footer() {
  return (
    <Styled.Footer>
      <hr />
      <h4
        css={css`
          text-align: center;
        `}>
        Some footer text
      </h4>
    </Styled.Footer>
  );
}

export default Footer;
