import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/shared/TopBar";

// const inter = Inter({ subsets: ["latin"] });
const spaceGroteski = Space_Grotesk({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Stanley Kariuki",
  description:
    "Frontend web developer and designer . React , wordpres and shopify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#10101E]">
        <div className="lg:max-w-6xl md:max-w-5xl mx-auto min-h-[100dvh] bg-no-repeat">
          <TopBar />
          <div className={spaceGroteski.className}>{children}</div>
        </div>
      </body>
    </html>
  );
}
