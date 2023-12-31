import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My portfolio page",
  description: "Powered by NextJs + TailwindCss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
