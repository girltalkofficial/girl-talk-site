import type { Metadata } from "next";
import { Inter } from "next/font/google";
import{Boruna, Mda, Motley, Quiet, Futura, Futuracond} from "@/utils/customFonts"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Girl Talk App",
  description: "Website built by Michael Hu for the Girl Talk Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Boruna.variable} ${Mda.variable} ${Motley.variable} ${Quiet.variable} ${Futura.variable} ${Futuracond.variable}`}>{children}</body>
    </html>
  );
}
