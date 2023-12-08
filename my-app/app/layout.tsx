import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

// khai bao font chu
const roboto = Roboto({ subsets: ['latin'], weight:['400','500','700', '900']})


export const metadata: Metadata = {
  title: 'My first app',
  description: 'my first project with next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='max-w-6xl mx-auto p-4'>
        {children}
        </main>
        </body>
    </html>
  )
}
