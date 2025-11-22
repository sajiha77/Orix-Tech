import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main className="min-h-screen pt-20 pb-20">{children}</main>

      <Footer />
    </>
  );
}
