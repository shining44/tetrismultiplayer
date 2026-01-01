import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "تهویه کوهساران | Koohsaran HVAC",
  description: "پیشرو در صنعت تهویه مطبوع ایران | Leading HVAC Solutions in Iran",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
