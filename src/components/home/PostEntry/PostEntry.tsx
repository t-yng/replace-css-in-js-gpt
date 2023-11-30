import { FC } from "react";
import { Link } from "@/components/common/Link/Link";
import { Tags } from "@/components/common/Tags/Tags";
import { Post } from "@/entities/Post";
import { formatDate } from "@/lib/format";
import { colors } from "@/styles/color";

interface PostEntryProps {
  post: Post;
}

export const PostEntry: FC<PostEntryProps> = ({ post }) => (
  <article className="PostEntry" data-testid="post-entry">
    <Link
      href={`/post/${post.slug}`}
      prefetch={false}
      className="PostEntry__LinkOverlay"
      aria-labelledby={`post-title-${post.id}`}
      title={post.title}
    />
    <h2 id={`post-title-${post.id}`} className="PostEntry__Title">
      {post.title}
    </h2>
    <time className="PostEntry__Date">{formatDate(post.date)}</time>
    <Tags tags={post.tags} className="PostEntry__Tags" />

    <style jsx>{`
      :global(.PostEntry__Tags) {
        position: relative;
        margin-top: 0.5rem;
      }

      .PostEntry {
        position: relative;
        padding: 20px 24px;
      }

      .PostEntry__Date {
        color: ${colors.black3};
        font-size: 0.85rem;
        display: block;
        margin-top: 4px;
      }

      .PostEntry__Title {
        font-size: 1.2rem;
      }

      @media (max-width: 850px) {
        .PostEntry__Title {
          font-size: 1rem;
        }
      }

      .PostEntry__LinkOverlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
      }
    `}</style>
  </article>
);
