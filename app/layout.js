import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Limon Chandra Ray - Portfolio",
  description: "Welcome to the portfolio of Limon Chandra Ray, a passionate Full Stack Developer specializing in Python, Django, FastAPI, React.js, Next.js, PostgreSQL, and Redis. Explore my projects, skills, and experience in building scalable web applications with clean and efficient code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      ><Header/>
        <main className="grid grid-cols-1 bg-white">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
