import Header from "@/components/H & F/Header";
import "./globals.css";
import Footer from "@/components/H & F/Footer";

export const metadata = {
  title: {
    absolute: "",
    default: "KGRN Shipping Services",
    template: "%s - KGRN",
  },
  description: "KGRN Shipping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4S69S1F8JC"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4S69S1F8JC', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
