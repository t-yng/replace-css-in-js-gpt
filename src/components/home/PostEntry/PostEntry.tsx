import { FC } from "react";
import { css } from "@emotion/react";
import { Link } from "@/components/common/Link/Link";
import { Tags } from "@/components/common/Tags/Tags";
import { Post } from "@/entities/Post";
import { formatDate } from "@/lib/format";
import { colors } from "@/styles/color";

interface PostEntryProps {
  post: Post;
}

export const PostEntry: FC<PostEntryProps> = ({ post }) => (
  <article css={postEntry} data-testid="post-entry">
    <Link
      href={`/post/${post.slug}`}
      prefetch={false}
      css={postEntryLinkOverlay}
      aria-labelledby={`post-title-${post.id}`}
      title={post.title}
    />
    <h2 id={`post-title-${post.id}`} css={postEntryTitle}>
      {post.title}
    </h2>
    <time css={postEntryDate}>{formatDate(post.date)}</time>
    <Tags tags={post.tags} css={postEntryTags} />
  </article>
);

const postEntry = css`
  position: relative;
  padding: 20px 24px;
`;

const postEntryTags = css`
  position: relative;
  margin-top: 0.5rem;
`;

const postEntryDate = css`
  color: ${colors.black3};
  font-size: 0.85rem;
  display: block;
  margin-top: 4px;
`;

const postEntryTitle = css`
  font-size: 1.2rem;

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`;

const postEntryLinkOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
`;