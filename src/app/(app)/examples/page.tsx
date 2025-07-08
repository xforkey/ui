import { Metadata } from "next"
import { CardsDemo } from "@/components/cards"

const title = "Build your component library"
const description =
  "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code."

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

export default function IndexPage() {
  return (

    <CardsDemo />

  )
}
