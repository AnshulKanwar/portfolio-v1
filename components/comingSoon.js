import Link from "next/link";
import Layout from "./layout";
import { TiArrowLeftThick } from "react-icons/ti";

export default function ComingSoon() {
  return (
    <Layout>
      <div className="h-full flex justify-center items-center">
        <div>
          <h1 className="text-5xl">Coming Soon!</h1>
          <div className="mt-4">
            <Link href="/">
              <a>
                <div className="flex items-center justify-center text-blue-400 hover:underline decoration-from-font">
                  <TiArrowLeftThick className="mr-1"/> Go Back Home
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
