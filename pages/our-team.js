import Image from "next/image";
export default function team() {
  const team = [
    {
      name: "Yifan Bao",
      position: "CEO",
      intro: "I am ..... Most of mywork is open .",
      avatar:
        "https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Harry Potter",
      position: "CFO",
      intro:
        "Darrell believes the relationship between the Franchisee and Franchisor is a partnership and his goal is to have happy & successful Franchisees. Working is grossly overrated (a necessary evil) but it’s something most of us have to do so why not do something that gives you flexibility about what and when you do it, and at the same time provides you with a comfortable income, for a modest investment.\
      When Darrell’s not working, he likes to spend his time with his family, friends, he enjoys watching cricket, motorsport and would like to spend more time on the river trout fishing.",
      avatar:
        "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "XXxxxx",
      position: "Mater mower",
      intro:
        "Neil Turner purchased the Jim’s Mowing Regional Franchise for Otago in November 2005. The Otago region comprises of all areas south of a line from Haast to north of Oamaru. All franchises in this area are part of this region. There are currently franchisees operating in Mosgiel, Dunedin and Central Otago.\
        Neil has owned and operated a Jim’s Mowing franchise in Dunedin since 2002. He also worked as a green keeper for twelve years and hold Green keeping Trade Certificate and a Turf Culture Diploma.\
        Sick of working long hours and wanting more\
        time with his family, he purchased a franchise and believes that Jim’s Mowing is the best Mowing & Garden Care franchise available in New Zealand.",
      avatar:
        "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Bill Gatsby",
      position: "Cleaner",
      intro: "I am ..... Most of mywork is open .",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ];
  // TODO add awesomefont and contact
  return (
    <div className="container mx-auto px-5 mt-16 mb-16">
      <div className="w-full mx-auto lg:w-1/2"></div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">
        Our Team
      </h1>
      <div className="flex flex-wrap overflow-hidden xl:-mx-3 justify-center">
        {team.map((i) => (
          <div
            key={i.name}
            className=" my-4 px-4 w-full overflow-hidden md:w-1/2 xl:my-6 xl:px-6 xl:w-1/2"
          >
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <Image
                className="rounded-t-lg"
                src={i.avatar}
                alt={i.name}
                height={1000}
                width={680}
                layout="responsive"
              />
              <div className="py-6 px-8 rounded-lg bg-white">
                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                  {i.name}
                </h1>
                <p className="text-gray-700 tracking-wide">{i.intro}</p>
                <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  some contacts
                </button>
              </div>
              <div className="absolute top-2 right-2 py-2 px-4 bg-yellow-300 rounded-lg">
                <span className="text-md ">{i.position}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
