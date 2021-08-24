import { getDataById } from "../lib/handleMarkdown";

export async function getStaticProps() {
  const aboutData = await getDataById("about", "about");
  return {
    props: {
      aboutData: aboutData,
    },
  };
}

export default function about({ aboutData }) {
  return (
    <>
      <div className="container mx-auto px-5 mt-16 mb-16">
        <div className="w-full mx-auto lg:w-1/2">
          <h1>About</h1>
          <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} />
        </div>
      </div>
    </>
  );
}
