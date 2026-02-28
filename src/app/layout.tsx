import type { Metadata } from "next";
import "./globals.css"; // THIS LINKS THE CSS WE JUST MADE!

export const metadata: Metadata = {
  title: "EpicTech v1",
  description: "Modern tech solutions for the next generation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
