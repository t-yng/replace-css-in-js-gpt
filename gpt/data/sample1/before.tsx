// @ts-nocheck
import { FC, PropsWithChildren } from "react";
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
      <div className="Layout__Main" tabIndex={-1}>
        <main className="Layout__Content">
          {title && (
            <h1 className={"Layout__Title Layout__Heading1"}>{title}</h1>
          )}
          {children}
        </main>
        <Sidebar tags={tags} profile={profile} />
      </div>

      <style jsx>{`
        .Layout__Title {
          padding-left: 1rem;
        }

        .Layout__Heading1 {
          font-size: 1.8rem;
        }

        .Layout__Main {
          display: grid;
          grid-template-columns: auto 240px;
          grid-gap: 3rem;
          margin: 0 auto;
          max-width: 1152px;
          padding-top: var(--layout-main-pt);
          padding-bottom: var(--layout-main-pb);
        }

        .Layout__Content {
          overflow: auto;
        }

        @media (max-width: 850px) {
          .Layout__Main {
            grid-template-columns: 1fr;
            padding-top: var(--layout-main-mpt);
            padding-bottom: var(--layout-main-mpb);
          }

          .Layout__Heading1 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
};
