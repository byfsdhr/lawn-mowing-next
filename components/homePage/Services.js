import Image from "next/image";
// 898 2287 0729
export default function Services({ serviceData }) {
  
  return (
    <div className="container mx-auto px-6 p-10 ">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our services
      </h2>
      <div className="flex flex-wrap -mx-2 overflow-hidden xl:-mx-3">
        {serviceData.map(({ id, title, desc }) => (
          <>
            <div
              key={id}
              className="my-2 px-2 w-full overflow-hidden xl:my-3 xl:px-3 xl:w-1/2"
            >
              <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-lg md:h-72 mx-2">
                <div className="z-0 order-1 md:order-2 relative w-full md:w-1/2 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                  <div>
                    {/* <Image src={s.imgUrl} alt={s.name} layout="fill" /> */}
                  </div>
                </div>

                <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                  <div key={title} className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                    <h3 className="hidden md:block font-bold text-2xl text-gray-700">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-justify">{desc}</p>
                    <a
                      className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900"
                      href=""
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
