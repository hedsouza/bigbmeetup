import type { Metadata } from "next";
import { Poppins, Nunito_Sans, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "BigBMeetup - Bringing Communities Together",
  description:
    "A movement that celebrates people, purpose, and positive change in Qatar. To Inspire, To Educate, To Inform & Bring Communities Together.",
  keywords: [
    "BigBMeetup",
    "Qatar",
    "community",
    "CSR",
    "sustainability",
    "inclusion",
    "sports",
    "wellness",
    "art",
    "culture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${nunitoSans.variable} ${openSans.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

