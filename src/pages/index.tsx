import { FC } from "react";
import { css } from "@emotion/react";
import { GetStaticPropsResult } from "next";
import { Layout } from "@/components/common";
import { PostEntries } from "@/components/home";
import { Post, Tag, SeoMetadata } from "@/entities";
import { siteMetadata } from "@/config/siteMetadata";

type IndexPageProps = {
  posts: Post[];
  tags: Tag[];
  seoMetadata: SeoMetadata;
};

const IndexPage: FC<IndexPageProps> = ({ posts, tags, seoMetadata }) => {
  return (
    <Layout tags={tags} seoMetadata={seoMetadata} title="記事一覧">
      <PostEntries posts={posts} css={postEntries} />
    </Layout>
  );
};

const postEntries = css`
  margin-top: 16px;
  margin-bottom: 2rem;
`;

export default IndexPage;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<IndexPageProps>
> => {
  const posts: Post[] = [
    {
      id: "test1",
      title: "test1",
      slug: "test1",
      content: "test1",
      tags: ["test1", "frontend"],
      date: "2020-04-30T00:00:00.000Z",
      description: "description",
      author: "t-yng",
    },
    {
      id: "test2",
      title: "test2",
      slug: "test2",
      content: "test2",
      tags: ["test2"],
      date: "2020-04-30T00:00:00.000Z",
      description: "description",
      author: "t-yng",
    },
    {
      id: "test3",
      title: "test3",
      slug: "test3",
      content: "test3",
      tags: [],
      date: "2020-04-30T00:00:00.000Z",
      description: "description",
      author: "t-yng",
    },
  ];
  const tags: Tag[] = [
    { name: "test1", count: 10 },
    { name: "test2", count: 20 },
    { name: "frontend", count: 3 },
  ];

  return {
    props: {
      posts: posts,
      tags,
      seoMetadata: {
        ...siteMetadata,
        title: `記事一覧 | ${siteMetadata.title}`,
      },
    },
  };
};