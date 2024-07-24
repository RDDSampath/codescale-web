import { ChakraProvider } from "@chakra-ui/react";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Details from "@/components/Details";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Details />
      <Testimonials />
    </>
  );
}
