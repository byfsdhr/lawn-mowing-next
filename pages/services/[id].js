import { getServiceIds, getServiceData } from "../../lib/services";

export async function getStaticPaths() {
  const paths = await getServiceIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const serviceData = await getServiceData(params.id);
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
      <div dangerouslySetInnerHTML={{ __html: serviceData.contentHtml }} />
    </div>
  );
}
