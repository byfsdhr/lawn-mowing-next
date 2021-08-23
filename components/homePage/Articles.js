export default function Articles() {
  return (
    <>
      <div className="text-center">Lastest Articles</div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-5 mb-5">
        <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center mr-0 md:mr-5">
          <div slot="bottom-left" className="max-w-xs">
            <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1627751476653-e954179b174a"
                alt=""
                className="rounded-t-lg w-full"
              />
              <div className="p-6">
                <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
                  This is Amazing for people to visit.
                </h1>
                <p className="text-gray-700 my-2 hover-text-900 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium quis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center mr-0 md:mr-5">
          <div slot="bottom-left" className="max-w-xs">
            <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1627751476653-e954179b174a"
                alt=""
                className="rounded-t-lg w-full"
              />
              <div className="p-6">
                <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
                  This is Amazing for people to visit.
                </h1>
                <p className="text-gray-700 my-2 hover-text-900 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium quis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center mr-0 md:mr-2">
          <div slot="bottom-left" className="max-w-xs">
            <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1627751476653-e954179b174a"
                alt=""
                className="rounded-t-lg w-full"
              />
              <div className="p-6">
                <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
                  This is Amazing for people to visit.
                </h1>
                <p className="text-gray-700 my-2 hover-text-900 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
