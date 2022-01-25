import { MDXRemote } from "next-mdx-remote";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostsIds, getPost } from "../../lib/posts";
import Image from "../../components/blog/image";
import Code from "../../components/blog/code";
import Alert from "../../components/blog/alert";

const components = {
  Image,
  pre: Code,
  Alert,
};

export default function Post({ post }) {
  return (
    <Layout>
      <div className="mt-20 max-w-[65ch] mx-auto min-h-[calc(100vh-(2*theme(spacing.6))-theme(spacing.12)-theme(spacing.32))]">
        <div className="">
          <div className="mb-20">
            <h1 className="mb-4 font-extrabold text-xl md:text-3xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="text-slate-500 dark:text-slate-300 text-md">
              <Date dateString={post.date} />
            </div>
          </div>
          <div className="w-full">
            <div className="prose dark:prose-invert prose-pre:bg-white">
              <MDXRemote {...post.content} components={components} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: {
      post,
    },
  };
}
