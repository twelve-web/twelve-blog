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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="w-full mx-auto py-10 px-4">
              <header className="max-w-5xl mx-auto mb-10">
                <div className="flex items-center justify-between">
                  <ModeToggle />
                  <div className="flex items-center space-x-4 ml-4">
                    <Search />
                    <nav className="text-sm font-medium space-x-6">
                      <Link href="/" replace>Home</Link>
                      <Link href="/about" replace>About</Link>
                      <Link href="/examples" replace>Examples</Link>
                    </nav>
                  </div>
                </div>
              </header>
              <main className="max-w-5xl mx-auto">{children}</main>
            </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
