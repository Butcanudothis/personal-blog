import Footer from './components/Footer'
import MyProfilePic from './components/MyProfilePic'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: "Akshay's blog",
  description: 'created by Akshay Varma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-[rgb(32,32,35)] dark:text-white">
        <Navbar />
        <MyProfilePic />
        {children}
        <Footer />
      </body>
    </html>
  )
}
