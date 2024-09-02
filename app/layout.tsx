import type { Metadata } from "next";
import { Inter } from "next/font/google";
import{Boruna, Mda, Motley, Quiet, Futura, Futuracond} from "@/utils/customFonts"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Girl Talk App",
  description: "Girl Talk is a Hong Kong based student-led organisation dedicated to empowering girls through the principles of interaction, education, and service. Our core belief? That “girl talk” is more than trivial conversation. That moments of connection and understanding between girls build the strength needed to fight back. We champion this belief by teaching our core curriculum, complete with a women&apos;s history course, beginner guides to feminine hygiene, and 100 conversation cards for teens, in chapters across the world. Here in Hong Kong, we provide period care to those in need, working with LUÜNA — a women-led, B Corp-certified period care company — to supply refugees with pads year-round. Because it&apos;s never just girl talk: it&apos;s creating a network of educated, like-minded, and community-service-oriented advocates determined to change the world — one conversation at a time."
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
