import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Parag Chauhan",
  description: "A portfolio by and of Parag Chauhan",
  openGraph: {
    title: "Parag Chauhan - Portfolio",
    description: "Explore the portfolio of Parag Chauhan, showcasing unique digital experiences.",
    // url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "/images/parag.jpg",
        width: 1200,
        height: 630,
        alt: "Parag Chauhan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parag Chauhan - Portfolio",
    description: "Explore the portfolio of Parag Chauhan, showcasing unique digital experiences.",
    image: "/images/sprout.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
