import Link from "next/link";
import Image from "next/image";

export default function Articles({ articleData }) {
  const limit = 3;
  const sortedArticleData = articleData.sort(({ date: a }, { b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <>
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 mt-8">
        Lastest Articles
      </h2>
      <div className="flex items-stretch flex-wrap -mx-2 md:-mx-2 xl:-mx-4 justify-center">
        {sortedArticleData
          .slice(0, limit)
          .map(({ id, title, desc, date, author }) => (
            <div
              key={id}
              className="transition-all ease-in-out duration-1000 flex flex-col mr-0 md:mr-5"
            >
              <Link href={`/articles/${id}`} passHref>
                <div slot="bottom-left" className="max-w-xs">
                  <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1627751476653-e954179b174a"
                      alt=""
                      className="rounded-t-lg w-full"
                      width={430}
                      height={320}
                    />
                    <div className="p-6">
                      <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
                        {title}
                      </h1>
                      <p className="flex-1 text-gray-700 my-2 hover-text-900 ">
                        {desc}
                      </p>
                      <p className="text-right font-thin">
                        by {author} in {date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
