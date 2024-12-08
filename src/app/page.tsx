import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <Hero />
        <Stats />
      </div>
    </section>
  );
}
