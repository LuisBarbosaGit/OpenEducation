"use client";
import { Navbar } from "./components/Navbar/navbar";
import { SidebarProvider } from "./contexts/sidebar.context";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={` antialiased`}>
        <SidebarProvider>
          <Navbar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
