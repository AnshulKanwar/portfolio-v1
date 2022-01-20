import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Anshul Kanwar</title>
      </Head>

      <div className="bg-black text-white">
        <div className="flex flex-col bg-black text-white">
          <div className="flex-initial">
            <Navbar />
          </div>
          <div className="flex-auto max-w-4xl px-10 mx-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
