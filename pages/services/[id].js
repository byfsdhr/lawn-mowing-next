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
  return (
    <div>
      <div>{serviceData.id}</div>
      <br />
      <div
        className="mt-8 mb-16 prose lg:prose-lg xl:prose-xl"
        dangerouslySetInnerHTML={{ __html: serviceData.contentHtml }}
      />
    </div>
  );
}
