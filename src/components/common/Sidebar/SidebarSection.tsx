import { FC, PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { colors } from "@/styles/color";

type SidebarSectionProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export const SidebarSection: FC<SidebarSectionProps> = ({
  children,
  title,
  className,
}) => (
  <section css={sidebarSectionMain} className={className}>
    <header css={sidebarSectionHeader}>{title}</header>
    <div css={sidebarSectionBody}>{children}</div>
  </section>
);

const sidebarSectionMain = css`
  background-color: ${colors.white};
`;

const sidebarSectionHeader = css`
  background-color: ${colors.main};
  color: ${colors.white};
  font-weight: bold;
  padding: 4px 12px;
`;

const sidebarSectionBody = css`
  padding: 10px 4px 6px 12px;
`;