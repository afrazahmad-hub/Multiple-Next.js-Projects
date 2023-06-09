import Header from "@/components/layout/Header";
import Footer from "@/components/widgets/Footer";
import "./globals.css";

export const metadata = {
  title: "Panaverse DAO",
  description: "Generated by Afraz Ahmad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar */}
        <Header />

        {children}
        {/* Footes */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
