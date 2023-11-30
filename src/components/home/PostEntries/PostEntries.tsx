import { FC, Fragment } from "react";
import { Post } from "@/entities";
import { colors } from "@/styles/color";
import { PostEntry } from "../PostEntry";

type PostEntriesProps = {
  posts: Post[];
  className?: string;
};

export const PostEntries: FC<PostEntriesProps> = ({ posts, className }) => (
  <div className={`PostEntries ${className}`}>
    {posts.map((post, i) => (
      <Fragment key={post.id}>
        <PostEntry post={post} />
        {i < posts.length - 1 && <hr className="PostEntries__Border" />}
      </Fragment>
    ))}
    <style jsx>{`
      .PostEntries {
        background-color: ${colors.white};
      }

      .PostEntries__Border {
        border: none;
        height: 1px;
        background-color: ${colors.black4};
        margin: 0;
      }
    `}</style>
  </div>
);
