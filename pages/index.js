import Hero from "../components/homePage/Hero";
import Testimonial from "../components/homePage/Testimonials";
import Features from "../components/homePage/Features";
import Articles from "../components/homePage/Articles";
// TODO create home page(pretty)
export default function Home() {
  return (
    <div>
      <Features />
      <Articles />
      <Hero />
      <Testimonial / >
    </div>
  );
}