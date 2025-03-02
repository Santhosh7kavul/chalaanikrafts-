import "./globals.css";
import Header from "@/components/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900">
      <Header />
      {children}
      </body>
    </html>
  );
}
