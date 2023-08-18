import { ThemeProvider } from '@/components/theme/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jay-Andy',
  description: "JayAndy is a passionate and talented web developer. He has participated in many attractive and interesting web projects, from company introduction websites to complex and advanced web applications. He has high skills in user interface design, front-end and back-end programming, as well as using modern web tools and frameworks. He is always ready to cooperate with partners and customers to understand their needs and desires, and provide them with the best web solutions. Please take a look at his portfolio to learn more about the amazing web projects he has done.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className='relative flex min-h-screen flex-col'>
              <Header />
            <main className='px-4 min-h-max my-4 container'>
              {children}
            </main>
            <footer>

            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
