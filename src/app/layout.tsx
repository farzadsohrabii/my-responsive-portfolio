import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'



const poppi = Poppins({
  subsets: ['latin'],
  weight: ["200","600"]
})


export const metadata: Metadata = {
  title: "Farzad Sohrabi | Frontend Developer | برنامه نویس و توسعه‌دهنده فرانت اند | فرزاد سهرابی",
  
  description: "فرزاد سهرابی، طراح و توسعه‌دهنده فرانت‌اند متخصص در React و Next.js. | Farzad Sohrabi, a professional Frontend Developer and Designer specializing in modern web technologies.",
 
  icons: {
    icon: "/f-icon.svg",
  },

   verification:{
    google:"iQO-gcqPtB-QCjTVznGE-ypbLgg8sWkVfzbRBe6kyXk"
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
    "UI Designer",
    "فرزاد سهرابی",
    "فرزاد",
    "سهرابی",
    "فرانت اند",
    "برنامه نویس",
    "طراح سایت",
    " برنامه نویس وب ",
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
