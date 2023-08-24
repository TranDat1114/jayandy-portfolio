import { ThemeProvider } from '@/components/theme/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/header'
// import Head from 'next/head';
import { BreadCrumb } from '@/components/layout/breadCrumb'
import favicon from "./favicon.ico"
import anhThe from "../../public/assets/img/anhthe.jpg"
import jayAndy from "../../public/assets/img/jayandy.png"
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Jay-Andy ❤️ Portfolio',
  description: "Jay Andy is a passionate and talented web developer. He has high skills in user interface design, front-end and back-end programming, as well as using modern web tools and frameworks. Please take a look at his portfolio to learn more about the amazing web projects he has done.",
  colorScheme: "dark light",
  applicationName: "Jay-Andy ❤️ Portfolio",
  publisher: "Dat Tran",
  openGraph: {
    firstName: "Tran",
    lastName: "Phu Dat",
    gender: "male",
    determiner: "auto",
    phoneNumbers: "0347647846",
    ttl: 0,
    emails: ["dattranphu1114@gmail.com", "cctalk1114@gmail.com", "jackandy249@gmail.com"],
    images: [anhThe.src, jayAndy.src, "https://pbs.twimg.com/profile_images/1673324652343558145/NHOON7xx_400x400.jpg",],
    description: "Jay Andy is a passionate and talented web developer. He has high skills in user interface design, front-end and back-end programming, as well as using modern web tools and frameworks. Please take a look at his portfolio to learn more about the amazing web projects he has done.",
    type: "profile",
    title: "JayAndy-Portfolio",
    countryName: "Vietnam",
    siteName: "JayAndy-Portfolio"
  },
  assets: "../../assets",
  category: "portfolio",
  icons: { icon: ["https://pbs.twimg.com/profile_images/1673324652343558145/NHOON7xx_400x400.jpg", favicon.src] },
  authors: [{ name: "Trần Phú Đạt", url: "https://github.com/TranDat1114" }],
  themeColor:
    [{
      color: "#000", media: "background"
    },
    {
      color: "#fff", media: "color"
    }],
  abstract: "Jay Andy is a passionate and talented web developer. Please take a look at his portfolio to learn more about the amazing web projects he has done.",
  creator: "Dat Tran",
  viewport: { width: "device-width", initialScale: 1, viewportFit: "auto" },
  twitter: {
    title: "Jay-Andy Portfolio",
    description: "Jay Andy is a passionate and talented web developer. Please take a look at his portfolio to learn more about the amazing web projects he has done.",
    images: "https://pbs.twimg.com/profile_images/1673324652343558145/NHOON7xx_400x400.jpg",
    creator: "Dat Tran",
    card: "summary"
  },
  keywords: ["web developer", "ui design", "front-end", "back-end", "web tools", "frameworks", "full-stack", "software engineering", "tran dat", "dat tran", "jayandy", "jackandy", "datran.online", "jayandy.id.vn", "c#", "coding", "uxui", "tranphudat", "trandat", "portfolio", "cv"]
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
            <BreadCrumb></BreadCrumb>
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
