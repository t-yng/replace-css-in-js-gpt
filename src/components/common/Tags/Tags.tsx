import { FC } from "react";
import { Tag } from "@/components/common";

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
  <div className={`Tag ${className}`}>
    {sortTags(tags).map((tag) => {
      return <Tag name={tag} key={tag} />;
    })}

    <style jsx>{`
      .Tag {
        display: flex;
        gap: 0.5rem;
      }
    `}</style>
  </div>
);
