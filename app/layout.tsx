import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
          <Modal isOpen/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
