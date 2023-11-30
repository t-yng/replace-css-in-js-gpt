// @ts-nocheck
import { FC } from "react";
import { css } from "@emotion/react";
import { Tag } from "@/entities";
import { Profile } from "@/config/profile";
import { SidebarTags } from "./SidebarTags";
import { SidebarProfile } from "./SidebarProfile";

type SidebarProps = {
  tags: Tag[];
  profile: Profile;
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ tags, profile }) => (
  <aside>
    <SidebarProfile css={sidebarProfile} profile={profile} />
    <SidebarTags tags={tags} />
  </aside>
);

const sidebarProfile = css`
  margin-bottom: 2rem;
`;
