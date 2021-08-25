import ContentLayout from "../components/ContentLayout";
import { getDataById } from "../lib/handleMarkdown";

export async function getStaticProps() {
  const faqData = await getDataById("faqs", "singlePage");
  return {
    props: {
      faqData,
    },
  };
}

export default function about({ faqData }) {
  return <ContentLayout data={faqData} />;
}
