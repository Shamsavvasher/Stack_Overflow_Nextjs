import {ClerkProvider,} from '@clerk/nextjs'
import './globals.css'
import React from 'react'
import { Inter, Space_Grotesk } from 'next/font/google';
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'A community-driven platform for asking and answring programming question.',
}  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}