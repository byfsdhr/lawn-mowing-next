import { getDataIds, getDataById } from "../../lib/handleMarkdown";

const folderName = "articles";

export async function getStaticPaths() {
  const paths = await getDataIds(folderName);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articleData = await getDataById(params.id, folderName);
  return {
    props: {
      articleData,
    },
  };
}

export default function Articles({ articleData }) {
  return (
    <div>
      <div>{articleData.id}</div>
      <br />
      <div
        className="mt-8 mb-16 prose lg:prose-lg xl:prose-xl"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </div>
  );
}
