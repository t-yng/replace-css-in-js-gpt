import { FC } from "react";
import { css } from "@emotion/react";
import { Link } from "@/components/common";
import { createTagLink } from "@/lib/link";
import { colors } from "@/styles/color";
import { SidebarSection } from "./SidebarSection";

interface Tag {
  name: string;
  count: number;
}

export interface SidebarTagsProps {
  tags: Tag[];
}

const sortTags = (tags: Tag[]): Tag[] => {
  return tags.sort((a, b) => b.count - a.count);
};

export const SidebarTags: FC<SidebarTagsProps> = ({ tags, ...others }) => (
  <SidebarSection title="タグ" {...others}>
    <ul css={sidebarTagsTags}>
      {sortTags(tags).map((tag) => (
        <li key={tag.name} css={sidebarTagsTag}>
          <Link
            decoration={false}
            href={createTagLink(tag.name)}
            aria-label={`${tag.name}の記事一覧、${tag.count}件`}
          >{`${tag.name} (${tag.count})`}</Link>
        </li>
      ))}
    </ul>
  </SidebarSection>
);

const sidebarTagsTags = css`
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
`;

const sidebarTagsTag = css`
  color: ${colors.black2};
  font-size: 0.875rem;
  line-height: 1.15rem;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${colors.accent};
  }
`;