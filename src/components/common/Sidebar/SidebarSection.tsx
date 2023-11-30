import { FC, PropsWithChildren } from "react";
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
  <section className={`SidebarSection__Main ${className}`}>
    <header className="SidebarSection__Header">{title}</header>
    <div className="SidebarSection__Body">{children}</div>
    <style jsx>{`
      .SidebarSection__Main {
        background-color: ${colors.white};
      }

      .SidebarSection__Header {
        background-color: ${colors.main};
        color: ${colors.white};
        font-weight: bold;
        padding: 4px 12px;
      }

      .SidebarSection__Body {
        padding: 10px 4px 6px 12px;
      }
    `}</style>
  </section>
);
