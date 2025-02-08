import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Search } from "@/components/search"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Markweb Blog",
  description: "twelve技术博客",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="max-w-2xl mx-auto py-10 px-4">
              <header>
                <div className="flex items-center justify-between">
                  <ModeToggle />
                  <div className="flex items-center space-x-4 ml-4">
                    <Search />
                    <nav className="text-sm font-medium space-x-6">
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                    </nav>
                  </div>
                </div>
              </header>
              <main>{children}</main>
            </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
