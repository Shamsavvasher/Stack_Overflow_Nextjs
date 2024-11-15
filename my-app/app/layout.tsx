import {ClerkProvider,} from '@clerk/nextjs'
import './globals.css'
import React from 'react'
import { Inter, Space_Grotesk } from 'next/font/google';
import type {Metadata} from 'next'
import { ThemeProvider } from '@/context/ThemeProvider';

const inter = Inter(
  {
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500','600', '700', '800', '900'],
    variable:'--font-inter'
  }
  
)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: [ '300', '400', '500','600', '700'],
  variable:'--font-space-grotesk'
})
export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'A community-driven platform for asking and answring programming questions Get hep, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app developement, algorithms, data structures, and more.',
  icons: {
    icon:'/assets/images/site-logo.svg'
  }
}  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
      <html lang="en">
      <body className={`${inter.variable}${spaceGrotesk}`}>
      <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 
            'primary-gradient',
          footerAction:
          'primary-text-gradient hover:text-primary-500',
            
          
      }
    }}>
          <ThemeProvider>
          {children}
          </ThemeProvider>
    </ClerkProvider>
        </body>
      </html>
  )
}