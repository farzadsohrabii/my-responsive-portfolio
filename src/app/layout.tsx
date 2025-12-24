import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'



const poppi = Poppins({
  subsets: ['latin'],
  weight: ["200","600"]
})


export const metadata: Metadata = {
  title: "Farzad Sohrabi | Frontend Developer",
  
  description: "Frontend Developer specialized in React, Next.js, and Tailwind CSS. Focused on building responsive and clean user interfaces.",
 
  icons: {
    icon: "/f-icon.svg",
  },

  keywords:[
    "Farzad",
    "Sohrabi",
    "farzad",
    "sohrabi",
    "Farzad Sohrabi",
    "farzad sohrabi",
    "Farzad sohrabi",
    "farzad Sohrabi",
    "Frontend developer",
    "Frontend",
    "nextjs",
    "next.js",
    "Next.JS",
    "فرزاد سهرابی",
    "فرزاد",
    "سهرابی",
    "فرانت اند",
    "برنامه نویس",
    "طراح سایت",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppi.className}>
      <body>
        
        {children}
      </body>
    </html>
  );
}
