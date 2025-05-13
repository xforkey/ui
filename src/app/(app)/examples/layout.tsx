import { Metadata } from "next"
import Link from "next/link"

const title = "Examples"
const description = "Check out some examples app built using the components."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container-wrapper">
      <div className="container py-6">
        <section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
          {children}
        </section>
      </div>
    </div>
  )
}
