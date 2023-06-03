import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Promotions from "../../components/Promotions";
import Products from "../../components/Products";
import Wrapper from "../../components/Wrapper";
import Paragraphs from "../../components/Paragraphs";
import Subscription from "../../components/Subscription";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import AllProducts from "./AllProducts/page";
export default function Home() {
  return (
    <main>
      <Wrapper>
        <Navbar />
        <Hero />
        <Promotions />
        <Products />
        <Paragraphs />
        <Subscription />
        <Info />
        <Footer />
      </Wrapper>
    </main>
  );
}
