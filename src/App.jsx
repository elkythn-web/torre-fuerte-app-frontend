import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Ministerio from "./components/Ministerio";
import Donadores from "./components/Donadores";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <Donadores />
        <Ministerio />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
