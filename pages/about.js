import { getDataById } from "../lib/handleMarkdown";

export async function getStaticProps() {
  const aboutData = await getDataById("about", "singlePage");
  return {
    props: {
      aboutData: aboutData,
    },
  };
}

export default function about({ aboutData }) {
  return (
    <div className="container mx-auto px-5 mt-16 mb-16">
      <div className="w-full mx-auto lg:w-1/2">
        <h1>{aboutData.title}</h1>
        <div
          className="mt-8 mb-16 prose lg:prose-lg xl:prose-xl"
          dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }}
        />
      </div>
    </div>
  );
}
