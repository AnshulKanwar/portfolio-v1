import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneLight,
  atomOneDark,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import TitleBar from "./titleBar";

export default function Code({
  children: {
    props: { className, children: code },
  },
}) {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const language = className.replace(/language-/, "");

  return (
    <div
      className="rounded-md shadow-box"
      style={{ backgroundColor: theme === "dark" ? "#282C34" : "#FAFAFA" }}
    >
      <TitleBar />
      <div className="px-8 pt-4">
        <SyntaxHighlighter
          language={language}
          style={theme === "dark" ? atomOneDark : atomOneLight}
          customStyle={{ marginTop: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
