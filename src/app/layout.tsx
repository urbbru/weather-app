"use client";

import { AppShell } from "@/components";
import { QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { QUERY_CLIENT } from "../../constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={QUERY_CLIENT}>
          <AppShell>{children}</AppShell>
        </QueryClientProvider>
      </body>
    </html>
  );
}
