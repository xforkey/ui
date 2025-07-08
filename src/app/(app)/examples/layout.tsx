import { Metadata } from "next"

const title = "Examples"
const description = "Check out some examples app built using the components."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-4">
      {children}
    </div>
  )
}
