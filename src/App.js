import Analytics from "./components/analytics/Analytics";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/UpHero";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
