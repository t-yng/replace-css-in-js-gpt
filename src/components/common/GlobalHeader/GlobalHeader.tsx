import { css } from '@emotion/react';
import {
  TITLE_LOGO_IMAGE_URL,
  TITLE_LOGO_IMAGE_ALT,
  TITLE_LOGO_LINK_TITLE,
} from '@/constants';
import { colors } from '@/styles/color';
import { Link } from '../Link/Link';

export const GlobalHeader = () => (
  <header>
    <div css={globalHeaderWrapper}>
      <div css={globalHeaderMain}>
        <Link href="/" title={TITLE_LOGO_LINK_TITLE}>
          <img
            src={TITLE_LOGO_IMAGE_URL}
            alt={TITLE_LOGO_IMAGE_ALT}
            css={globalHeaderTitleLogImg}
            width={438}
            height={38}
            decoding="async"
          />
        </Link>
      </div>
    </div>
  </header>
);

const globalHeaderTitleLogImg = css`
  width: 100%;
`;

const globalHeaderWrapper = css`
  background-color: ${colors.main};
`;

const globalHeaderMain = css`
  display: flex;
  justify-content: center;
  padding: 1rem 20px;
`;