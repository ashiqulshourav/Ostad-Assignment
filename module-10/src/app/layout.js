import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


export const metadata = {
  title: 'Simple Next App',
  description: 'A just simple next app for Ostad Assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
