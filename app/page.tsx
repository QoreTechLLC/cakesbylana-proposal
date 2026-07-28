import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Quote from "@/components/Quote";
import QuoteRequest from "@/components/QuoteRequest";
import AboutTeaser from "@/components/AboutTeaser";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collection />
      <Quote />
      <QuoteRequest />
      <AboutTeaser />
    </main>
  );
}
