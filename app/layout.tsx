import "./globals.css";
import type { Metadata } from "next";
import { ChadProvider } from "@/store/context";

export const metadata: Metadata = {
  title: "Chad",
  description: "Chad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChadProvider>{children}</ChadProvider>
      </body>
    </html>
  );
}
