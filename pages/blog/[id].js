import { MDXRemote } from "next-mdx-remote";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneLight,
  atomOneDark,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Layout from "../../components/layout";
import TitleBar from "../../components/titlebar";
import Date from "../../components/date";
import { getAllPostsIds, getPost } from "../../lib/posts";

function Code({ language, children }) {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="rounded-md shadow-[0_0_30px_-4px_rgba(17,12,46,0.15)]"
      style={{ backgroundColor: theme === "dark" ? "#282C34" : "#FAFAFA" }}
    >
      <TitleBar />
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? atomOneDark : atomOneLight}
        customStyle={{ marginTop: 0 }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

const components = {
  Code,
};

export default function Post({ post }) {
  return (
    <Layout>
      <div className="mt-32 max-w-fit mx-auto min-h-[calc(100vh-(2*theme(spacing.6))-theme(spacing.12)-theme(spacing.32))]">
        <div className="">
          <div className="mb-20">
            <h1 className="mb-4 font-extrabold text-5xl md:text-6xl lg:text-7xl">
              {post.title}
            </h1>
            <div className="text-slate-500 dark:text-slate-300 text-md">
              <Date dateString={post.date} />
            </div>
          </div>
          <div className="prose dark:prose-invert">
            <MDXRemote {...post.content} components={components} />
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
