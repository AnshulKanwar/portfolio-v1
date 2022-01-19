import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Anshul Kanwar</title>
      </Head>

      <div className="flex flex-col h-screen bg-black text-white">
        <div className="flex-initial">
          <Navbar />
        </div>
        <div className="flex-auto">
          {children}
        </div>
      </div>
    </>
  );
}
