import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Parag Chauhan",
  description: "A portfolio by and of Parag Chauhan",
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
