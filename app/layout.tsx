import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "DreamScript AI",
  description: "Bringing your stories to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className="light">
        <body className="flex flex-col min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            {/* toaster */}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
