import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Anshul Kanwar</title>
      </Head>

      <div className="pb-10 bg-black text-white">
        <div className="flex flex-col bg-black text-white">
          <div className="flex-initial">
            <Navbar />
          </div>
          <div className="flex-auto max-w-6xl mx-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
