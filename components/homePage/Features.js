import Image from "next/image";


export default function Features() {
  const services = [
    {
      name: "Lawn mowing",
      imgUrl:"/../public/assets/lawn.jpg",
      desc: "We can provide a regular mowing service, tailored to suit and designed to keep your lawns and property looking tidy and well presented.",
    },
    {
      name: "Gardening",
      imgUrl:"/../public/assets/lawn.jpg",
      desc: "Want the best looking garden in the street? Bills Mownig gardening team can help and design a maintenance schedule to suit you and your property and to keep your garden maintained and looking great.",
    },
    {
      name: "Lawn mowing",
      imgUrl:"/../public/assets/lawn.jpg",
      desc: "We can provide a regular mowing service, tailored to suit and designed to keep your lawns and property looking tidy and well presented.",
    },
  ];

  return (
    <div className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our services
      </h2>
      {services.map((s) => {
        return (
          <div key={s.name} className="flex items-center flex-wrap mb-20">
            {/* pl-10 */}
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                {s.name}
              </h4>
              <p className="text-gray-600 mb-8">{s.desc}</p>
            </div>
            <div className="w-full md:w-1/2">
              <Image src={s.imgUrl} alt="Monitoring" width={100} height={80} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
