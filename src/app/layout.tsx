import "./globals.css";
import { Barlow, Fraunces } from "next/font/google";

const barlow = Barlow({ weight: ["600", "500"], subsets: ["latin"] });
const fraunces = Fraunces({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: "Sunnyside ☀️",
  description: "Sunnyside, a Front End Mentor challenge!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} ${fraunces.variable} flex min-h-screen flex-col items-center`}
      >
        {children}
      </body>
    </html>
  );
}
