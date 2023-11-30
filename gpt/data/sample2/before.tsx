// @ts-nocheck
import { FC } from "react";
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
    <SidebarProfile className="Sidebar__SidebarProfile" profile={profile} />
    <SidebarTags tags={tags} />
    <style jsx>{`
      :global(.Sidebar__SidebarProfile) {
        margin-bottom: 2rem;
      }
    `}</style>
  </aside>
);
