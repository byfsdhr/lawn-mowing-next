import Hero from "../components/homePage/Hero";
import Testimonial from "../components/homePage/Testimonials";
import Services from "../components/homePage/Services";
import Articles from "../components/homePage/Articles";
// TODO create home page(pretty)
import { getServiceData } from "../lib/services";

export async function getStaticProps() {
  const serviceData = await getServiceData();
  return {
    props: {
      serviceData,
    },
  };
}
export default function Home({serviceData}) {
  return (
    <div>
      <Services serviceData={serviceData} />
      <Articles />
      <Hero />
      <Testimonial / >
    </div>
  );
}