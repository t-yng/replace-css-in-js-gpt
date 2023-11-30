// @ts-nocheck
import { FC, PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { profile } from "@/config/profile";
import { Tag, SeoMetadata } from "@/entities";
import { GlobalHeader, Sidebar, Seo } from "@/components/common";

export type LayoutProps = PropsWithChildren<{
  tags: Tag[];
  seoMetadata: SeoMetadata;
  title?: string;
  pt?: string;
  pb?: string;
  mpt?: string;
  mpb?: string;
}>;

export const Layout: FC<LayoutProps> = ({
  children,
  tags,
  seoMetadata,
  title = "",
  pt = "2rem",
  pb = "2rem",
  mpt = "1rem",
  mpb = "0",
}) => {
  return (
    <div
      style={
        {
          "--layout-main-pt": pt,
          "--layout-main-pb": pb,
          "--layout-main-mpt": mpt,
          "--layout-main-mpb": mpb,
        } as React.CSSProperties
      }
    >
      <Seo
        title={seoMetadata.title}
        description={seoMetadata.description}
        author={seoMetadata.author}
        ogp={seoMetadata.ogp}
      />
      <GlobalHeader />
      <div css={layoutMain} tabIndex={-1}>
        <main css={layoutContent}>
          {title && <h1 css={[layoutTitle, layoutHeading1]}>{title}</h1>}
          {children}
        </main>
        <Sidebar tags={tags} profile={profile} />
      </div>
    </div>
  );
};

const layoutTitle = css`
  padding-left: 1rem;
`;

const layoutHeading1 = css`
  font-size: 1.8rem;

  @media (max-width: 850px) {
    font-size: 1.6rem;
  }
`;

export const layoutMain = css`
  display: grid;
  grid-template-columns: auto 240px;
  grid-gap: 3rem;
  margin: 0 auto;
  max-width: 1152px;
  padding-top: var(--layout-main-pt);
  padding-bottom: var(--layout-main-pb);

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    padding-top: var(--layout-main-mpt);
    padding-bottom: var(--layout-main-mpb);
  }
`;

export const layoutContent = css`
  overflow: auto;
`;
