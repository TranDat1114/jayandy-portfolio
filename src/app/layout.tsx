import { ThemeProvider } from '@/components/theme/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/header'
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Jay-Andy Portfolio',
  description: "Jay Andy is a passionate and talented web developer. He has high skills in user interface design, front-end and back-end programming, as well as using modern web tools and frameworks. Please take a look at his portfolio to learn more about the amazing web projects he has done.",
  colorScheme: "dark light",
  applicationName: "Jay-Andy Portfolio",
  publisher: "Dat Tran",
  creator: "Dat Tran",
  twitter:{
    title: "Jay-Andy Portfolio",
    description: "Jay Andy is a passionate and talented web developer. Please take a look at his portfolio to learn more about the amazing web projects he has done.",
    images: "https://twitter.com/DatTranM4/photo",
    creator:"Dat Tran",
    card:"summary_large_image"
  },
  keywords:["web developer", "UI design", "front-end", "back-end", "web tools", "frameworks", "full-stack", "software engineering", "Tran Dat", "dat tran", "jayandy", "jackandy","datran.online", "jayandy.id.vn","CSharp","coding","uxui","tranphudat","trandat"]
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
