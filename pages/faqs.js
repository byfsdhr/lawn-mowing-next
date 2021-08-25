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
  return (
    <>
      <div className="container mx-auto px-5 mt-16 mb-16">
        <div className="w-full mx-auto lg:w-1/2">
          <h1>{faqData.title}</h1>
          <div
            className="mt-8 mb-16 prose lg:prose-lg xl:prose-xl"
            dangerouslySetInnerHTML={{ __html: faqData.contentHtml }}
          />
        </div>
      </div>
    </>
  );
}
