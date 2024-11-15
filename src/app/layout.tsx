import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/Header";
import { AuthProvider } from "../providers/auth";
import { ModalProvider } from "../providers/modal";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

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
    verification: {google: "Wu7OVsB2QBXpjUEeqrQYbKkTUJ4ubIaXLPvpND1qRTY"},
  keywords: [
    "timer",
    "timer dev",
    "timer manager",
    "Timer para desenvolvedores",
    "Aplicativo de produtividade para programadores",
    "Cronômetro para devs",
    "Temporizador de tarefas para desenvolvedores",
    "Gerenciamento de tempo para programadores",
    "Timer Pomodoro para desenvolvedores",
    "foco para devs",
    "Tracker de tempo para coding sessions",
    "Como aumentar a produtividade na programação",
    "Melhor timer Pomodoro para desenvolvedores",
    "Aplicativo gratuito de timer",
    "Ferramentas de produtividade para desenvolvedores",
    "Gerenciar tempo de tarefas com cronômetro",
    "Melhor temporizador online para programação",
    "Produtividade para programadores",
  ],
  openGraph: {
    images: [`${process.env.HOST_URL}/homehero.svg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;

  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <ModalProvider>
            <AuthProvider>
              <Header />
              {children}
              <Toaster />
            </AuthProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
