import type { Metadata } from "next";
import "./globals.css"; // This links the CSS we just made!

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
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
