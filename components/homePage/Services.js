import Image from "next/image";
import Link from "next/link";
import { unsplashLoader } from "../../lib/imageLoaders";

export default function Services({ serviceData }) {
  return (
    <div className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our services
      </h2>
      <div className="flex flex-wrap gap-y-10 xl:-mx-4 justify-center">
        {serviceData.map(({ id, title, desc, coverImg }) => (
          <Link key={id} href={`/services/${id}`} passHref>
            <div className="mx-auto shadow-lg rounded-lg max-w-md hover:shadow-xl transition duration-300">
              <Image
                loader={unsplashLoader}
                src={coverImg}
                alt=""
                className="rounded-t-lg w-full"
                width={494}
                height={320}
              />
              <div className="flex flex-col p-6">
                <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
                  {title}
                </h1>
                <p className="flex-1 text-gray-700 my-2 hover-text-900 ">{desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}


{/* <div className="max-w-xs">

<div className="flex-1 mx-auto shadow-lg rounded-lg max-w-md hover:shadow-xl transition duration-300">
  <div className="p-6">
    <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
        test
    </h1>
    <p className="flex-1 text-gray-700 my-2 hover-text-900 "> Cras iaculis nunc in dolor congue tempus. Vivamus bibendum sollicitudin dictum. Curabitur scelerisque, lorem nec posuere lacinia, diam urna blandit orci, dignissim convallis ligula mauris ut neque. Suspendisse suscipit elit a magna pellentesque, sit amet venenatis leo venenatis.
        Aenean iaculis bibendum pharetra.
    </p>
  </div>
</div>
</div>

<div className="flex-1 mx-auto shadow-lg rounded-lg max-w-md hover:shadow-xl transition duration-300">
<div className="p-6">
  <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
        test
  </h1>
  <p className="flex-1 text-gray-700 my-2 hover-text-900 "> Cras iaculis nunc in dolor congue tempus. Vivamus bibendum sollicitudin dictum. Curabitur scelerisque, lorem nec posuere lacinia, diam urna blandit orci, dignissim convallis ligula mauris ut neque. Suspendisse suscipit elit a magna pellentesque, sit amet venenatis leo venenatis.
        Aenean iaculis bibendum pharetra.
        Integer purus massa, ultricies ut ornare sed,
        tempor eu dui. Sed fringilla sodales metus, a semper ante pharetra at.
        Nam lectus dolor, elementum in sapien id, condimentum cursus urna. Vivamus nec metus consectetur, consequat felis a, ornare nunc. Fusce sodales libero at est viverra, eu vehicula purus faucibus. Aliquam nec fermentum elit, sed tincidunt sapien. Aenean vitae augue dolor. In nunc ligula, viverra nec leo eu, sodales convallis mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eu gravida metus. Proin lobortis nisl lacus, non ullamcorper ex rutrum eget. Nam cursus cursus metus, consectetur pulvinar neque hendrerit iaculis.
  </p>
</div>
</div>

<div className="flex-1 mx-auto shadow-lg rounded-lg max-w-md hover:shadow-xl transition duration-300">
<div className="p-6">
  <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
        test
  </h1>
  <p className="flex-1 text-gray-700 my-2 hover-text-900 "> Cras iaculis nunc in dolor congue tempus. Vivamus bibendum sollicitudin dictum. Curabitur scelerisque, lorem nec posuere lacinia, diam urna blandit orci, dignissim convallis ligula mauris ut neque. Suspendisse suscipit elit a magna pellentesque, sit amet venenatis leo venenatis.
        Aenean iaculis bibendum pharetra.
        Integer purus  condimentum cursus urna. Vivamus nec metus consectetur, consequat felis a, ornare nunc. Fusce sodales libero at est viverra, eu vehicula purus faucibus. Aliquam nec fermentum elit, sed tincidunt sapien. Aenean vitae augue dolor. In nunc ligula, viverra nec leo eu, sodales convallis mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eu gravida metus. Proin lobortis nisl lacus, non ullamcorper ex rutrum eget. Nam cursus cursus metus, consectetur pulvinar neque hendrerit iaculis.
  </p>
</div>
</div> */}