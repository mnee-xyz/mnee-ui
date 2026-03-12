import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Sidebar } from "@/components/site/Sidebar";
import { Providers } from "@/components/site/Providers";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MNEE UI — Design System",
  description: "MNEE component library and design tokens",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        <Providers>
          {/* Top header */}
          <header className="fixed top-0 left-0 right-0 h-14 border-b border-[#E5E5E5] bg-white z-40 flex items-center px-6 gap-6">
            <Link href="/" className="flex items-center">
              {/* Show the circular MNEE icon + "MNEE" wordmark cropped from the full SVG lockup.
                  SVG viewBox: 1240×559. Content (icon+wordmark) spans x=80–845, y=80–324.
                  At img height=64px (scale=0.1145): content maps to ~88×28px. */}
              <div className="relative overflow-hidden" style={{ width: 88, height: 28 }}>
                <img
                  src="/MneePay+RockWallet-dark.svg"
                  alt="MNEE"
                  style={{
                    height: 64,
                    width: "auto",
                    position: "absolute",
                    top: -18,
                    left: 0,
                  }}
                />
              </div>
            </Link>
            <nav className="flex items-center gap-4 ml-4">
              <Link href="/docs/introduction" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Docs
              </Link>
              <Link href="/docs/components/button" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Components
              </Link>
            </nav>
            <div className="ml-auto flex items-center gap-3">
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded font-mono">
                v0.0.1
              </span>
            </div>
          </header>

          {/* Body layout — sidebar + main */}
          <div className="flex h-screen pt-14">
            <Sidebar />
            <main className="flex-1 overflow-y-auto scroll-pt-14">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
