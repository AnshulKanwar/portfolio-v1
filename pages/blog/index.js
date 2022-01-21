import Link from "next/link";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPosts } from "../../lib/posts";

export default function Blog({ allPosts }) {
  return (
    <Layout title="Blog">
      <div className="full-h-page mt-20 max-w-2xl mx-auto">
        <h1 className="text-8xl font-black">Blog</h1>
        <div className="mt-24 divide-y divide-slate-600 dark:divide-slate-400">
          {allPosts.map((post) => (
            <div key={post.id} className="py-8 first:pt-0 last:pb-0">
              <Link href={`/blog/${post.id}`}>
                <a>
                  <div className="group">
                    <h3 className="group-hover:underline text-2xl font-bold">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-300 text-sm">
                      <Date dateString={post.date} />
                    </p>
                    <p className="text-slate-500 dark:text-slate-300 mt-2">
                      {post.intro}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}
