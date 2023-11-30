import {
  TITLE_LOGO_IMAGE_URL,
  TITLE_LOGO_IMAGE_ALT,
  TITLE_LOGO_LINK_TITLE,
} from "@/constants";
import { colors } from "@/styles/color";
import { Link } from "../Link/Link";

export const GlobalHeader = () => (
  <header>
    <div className="GlobalHeader__Wrapper">
      <div className="GlobalHeader__Main">
        <Link href="/" title={TITLE_LOGO_LINK_TITLE}>
          <img
            src={TITLE_LOGO_IMAGE_URL}
            alt={TITLE_LOGO_IMAGE_ALT}
            className="GlobalHeader__TitleLogImg"
            width={438}
            height={38}
            decoding="async"
          />
        </Link>
      </div>
    </div>
    <style jsx>{`
      :global(.GlobalHeader__TitleLogImg) {
        width: 100%;
      }

      .GlobalHeader__Wrapper {
        background-color: ${colors.main};
      }

      .GlobalHeader__Main {
        display: flex;
        justify-content: center;
        padding: 1rem 20px;
      }
    `}</style>
  </header>
);
