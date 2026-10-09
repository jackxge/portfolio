import Header from "@/components/Header";
import Hero from "@/components/EditorialHero";
import WorkGrid from "@/components/EditorialWork";
import About from "@/components/About";
import ImpactThemes from "@/components/ImpactThemes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <ImpactThemes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
