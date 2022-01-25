import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiInformationCircle, HiExclamation } from "react-icons/hi";

// Don't remove these.
// They are required to tailwind picks the styles
// info warning info-dark warning-dark

export default function Alert({ color, children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className={`${theme === "light" ? color : color + '-dark'} flex items-center space-x-3 rounded-md px-4 py-2 border`}
    >
      <span className="text-2xl">
        {color === "info" ? <HiInformationCircle /> : <HiExclamation />}
      </span>
      <p>{children}</p>
    </div>
  );
}
