import { FC } from "react";
import { css } from "@emotion/react";
import { Tag } from "@/entities";
import { Profile } from "@/config/profile";
import { SidebarTags } from "./SidebarTags";
import { SidebarProfile } from "./SidebarProfile";

type SidebarProps = {
  tags: Tag[];
  profile: Profile;
};

export const Sidebar: FC<SidebarProps> = ({ tags, profile }) => (
  <aside>
    <SidebarProfile css={sidebarSidebarProfile} profile={profile} />
    <SidebarTags tags={tags} />
  </aside>
);

const sidebarSidebarProfile = css`
  margin-bottom: 2rem;
`;