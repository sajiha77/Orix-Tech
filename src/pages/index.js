import Layout from "@/components/Layout";
import Hero from "@/components/LandingPage/Hero";
import Clients from "@/components/LandingPage/Clients";
import WhyOrix from "@/components/LandingPage/WhyOrix";
import CaseStudies from "@/components/LandingPage/CaseStudies";
import Services from "@/components/LandingPage/Services";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhyOrix />
      <Services />
      <CaseStudies />
      <Clients />
    </Layout>
  );
}
