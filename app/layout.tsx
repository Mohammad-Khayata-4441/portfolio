import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
  title: {default:'Mohammad Khayata',template:"%s - Mohammad Khayata"},
  description: "Mohammad Khayata . frontend web developer ,",
  keywords: "JavaScript, TypeScript, Css, Html, Scss, Sass, Vue, Nuxt, Nuxt3, Vue.js, Nuxt.js, developer, mohammadKhayata, mohammad khayata,mohammed, mohammad, khayata, frontend, fullstack, glass, ui, lights, node, node.js, programmer, it,",
  alternates:{
    canonical: `${process.env.NEXT_BASE_URL}`
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children

}
