import { Inter,Roboto,Poppins} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'


const inter = Inter({ subsets: ['latin'] })
// const roboto = Roboto({ subsets: ['latin'] })
// const poppins =Poppins({ subsets: ['latin'] })

export const metadata = {
  title: 'CESA & CSI',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider >
        <div className='container'>
        <Navbar />
        {children}
        <Footer />
        </div>
        </ThemeProvider>
        </body>
    </html>
  )
}
