import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import './globals.css';

export const metadata = {
  title: 'সুরভী',
  description: 'A Online Food Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#F1F0E8] min-h-screen flex items-center justify-center flex-col`}>
        <Header/>
        <div className="container-fluid body-content w-full p-4 bg-[#F1F0E8] flex h-full">
          <div className="container mx-auto">
            {children}
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  )
}
