import ContentLayout from "../../components/ContentLayout";
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
  return <ContentLayout data={articleData} />;
}
