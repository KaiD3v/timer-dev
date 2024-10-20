import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/Header";
import { AuthProvider } from "../providers/auth";
import { ModalProvider } from "../providers/modal";

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

export const metadata: Metadata = {
  title: "TimerDev - Track you're time, achieve you're projects.",
  description:
    "Uma aplicação para rastrear o tempo dedicado a atividades produtivas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
