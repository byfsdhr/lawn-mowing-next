import { getAboutData } from '../lib/about'

export async function getStaticProps() {
  const aboutData = await getAboutData()
  return {
    props: {
      aboutData
    }
  }
}

export default function about({aboutData}){
  return(
    <>
    <h1>About</h1>
    <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} />
    </>
  )
}