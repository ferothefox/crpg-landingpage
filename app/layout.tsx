import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  type: 'website',
  title: 'Custom RPG',
  description: 'Create amazing RPGs within Discord with our highly customizable Discord bot!',
  url: 'https://customrpg.xyz/',
  image: 'https://customrpg.xyz/assets/img/logo.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
