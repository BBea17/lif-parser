import type React from "react"
import type { Metadata } from "next"
import { Cinzel, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Using medieval-style fonts
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Life is Feudal - Combat Log Parser",
  description: "Parseador de logs de combate para Life is Feudal: Arden",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${crimsonText.className} ${cinzel.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
