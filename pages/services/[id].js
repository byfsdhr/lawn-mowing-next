import ContentLayout from "../../components/ContentLayout";
import { getDataIds, getDataById } from "../../lib/handleMarkdown";

const folderName = "services";

export async function getStaticPaths() {
  const paths = await getDataIds(folderName);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const serviceData = await getDataById(params.id, folderName);
  return {
    props: {
      serviceData,
    },
  };
}

export default function Services({ serviceData }) {
  return <ContentLayout data={serviceData} />;
}
