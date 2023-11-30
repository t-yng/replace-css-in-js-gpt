import { FC } from "react";
import { css } from "@emotion/react";
import { Tag as TagComponent } from "@/components/common";

interface TagsProps {
  tags: string[];
  className?: string;
}

const sortTags = (tags: string[]): string[] => {
  return tags.sort((a, b) => {
    const aName = a.toUpperCase();
    const bName = b.toUpperCase();

    if (aName < bName) {
      return -1;
    } else if (aName > bName) {
      return 1;
    }

    return 0;
  });
};

export const Tags: FC<TagsProps> = ({ tags, className }) => (
  <div css={tagStyle} className={className}>
    {sortTags(tags).map((tag) => {
      return <TagComponent name={tag} key={tag} />;
    })}
  </div>
);

const tagStyle = css`
  display: flex;
  gap: 0.5rem;
`;