import Head from "next/head";
import { useTheme } from "next-themes";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, title }) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>{`${title ? `${title} - ` : ""} Anshul Kanwar`}</title>
      </Head>
      <div>
        <div className="flex dark:bg-black dark:text-white flex-col">
          <div className="flex-initial">
            <Navbar theme={theme} setTheme={setTheme} />
          </div>
          <div className="flex-auto w-full max-w-5xl px-10 sm:px-20 mx-auto">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
