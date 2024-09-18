import Header from "@/components/H & F/Header";
import "./globals.css";
import Footer from "@/components/H & F/Footer";

export const metadata = {
  title: "Home",
  description: "KGRN Shipping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
