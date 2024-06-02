import type { Metadata } from "next";
import "./globals.css";
import AuthOverlay from "@/app/components/AuthOverlay";
import UserProvider from "./context/user";

export const metadata: Metadata = {
  title: "TikTok Clone",
  description: "TikTok Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>

        <body>
          <AuthOverlay />
          {children}
        </body>
        
      </UserProvider>
    </html>
  );
}
