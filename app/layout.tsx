import type React from "react"
import "@/app/globals.css"
import { Outfit, Nunito } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata = {
  title: "Happy Humans - Making a Difference",
  description:
    "Happy Humans is a non-profit organization dedicated to serving our community through Shopping Spree programs and STEM education initiatives.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${nunito.variable} font-nunito`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
