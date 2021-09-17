export default function ContentLayout({ data }) {
  return (
    <div className="container mx-auto px-5 mt-16 mb-16">
      <div className="w-full mx-auto lg:w-1/2">
        <div
          className="mt-8 mb-16 prose lg:prose-lg xl:prose-xl"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </div>
    </div>
  );
}
