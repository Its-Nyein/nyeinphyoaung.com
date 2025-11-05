import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen w-full bg-black relative overflow-hidden">
          {/* Aurora Edge Glow Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(226, 232, 240, 0.15), transparent 65%), #000000",
            }}
          />
          {/* Your Content Here */}
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
