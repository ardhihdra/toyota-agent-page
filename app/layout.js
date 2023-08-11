import './globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// Import css files for react scick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mobil Toyota Promo Terbaru di Garut - Diskon Menarik!',
  description: 'Dapatkan mobil Toyota dengan diskon istimewa di Garut, Jawa Barat. Penawaran terbatas, segera hubungi kami!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
