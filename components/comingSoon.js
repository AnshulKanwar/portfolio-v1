import Link from "next/link";
import Layout from "./layout";
import { HiArrowLeft } from "react-icons/hi";

export default function ComingSoon() {
  return (
    <Layout>
      <div className="full-h-page flex justify-center items-center">
        <div>
          <h1 className="text-5xl">Coming Soon!</h1>
          <div className="mt-4">
            <Link href="/">
              <a>
                <div className="flex items-center justify-center text-blue-400 hover:underline decoration-from-font">
                  <HiArrowLeft className="mr-1"/> Go Back Home
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
