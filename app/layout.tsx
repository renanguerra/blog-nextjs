import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Guerra blog",
  description: "A blog made to share knowledgement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body className="text-black dark:bg-bg dark:text-white">{children}</body>
    </html>
  );
}
