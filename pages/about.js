import { getAboutData } from "../lib/about";

export async function getStaticProps() {
  const aboutData = await getAboutData();
  return {
    props: {
      aboutData,
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
