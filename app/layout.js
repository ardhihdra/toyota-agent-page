import './globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Toyota Garut',
  description: 'Info Promo Toyota Garut',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
