import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithubAlt,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from '../public/assets/logo.png'
import Image from 'next/image'
// TODO sticky footer and notification
export default function Footer() {

  const companyInfo ={ 
    desc:'Our company make your home great again!'
  }

  const socialMedias = [
    {
      name: "Facebook",
      icon: faFacebookF,
      url: "http://facebook.com",
    },
    {
      name: "Instgram",
      icon: faInstagram,
      url: "http://Instgram.com",
    },
    {
      name: "Github",
      icon: faGithubAlt,
      url: "http://github.com/byfsdhr",
    },
  ];

  const usefulLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About us",
      url: "/",
    },
    {
      name: "Services",
      url: "/",
    },
    {
      name: "FAQ",
      url: "/",
    },
    {
      name: "Privacy Policy",
      url: "/",
    },
  ];

  const ourServices = [
    {
      name: "Lawn Mowing",
      url: "/",
    },
    {
      name: "Edging Hedges",
      url: "/",
    },
    {
      name: "Gargen Rubbish",
      url: "/",
    },
    {
      name: "Others",
      url: "/",
    },
  ];

  const footerLinks = [
    { name: "Useful Links", links: usefulLinks },
    { name: "Our Services", links: ourServices },
  ];

  return (
    <div className="bg-cover bg-center bg-gray-600	">
      <div>
        <div className="container mx-auto px-6 lg:px-20 py-10">
          <div className="sm:flex">
            <div className="w-full lg:w-2/3">
              <div className="lg:flex">
                <div className="w-full lg:flex lg:px-6 ">
                  <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                    <Image src={logo} alt={companyInfo.name} />
                    <p className="text-gray-300 text-large lg:mr-6">{companyInfo.desc}</p>
                  </div>
                  {footerLinks.map((i) => {
                    return (
                      <div
                        key={i.name}
                        className="w-full mb-6 lg:mb-0 lg:w-1/2"
                      >
                        <h2 className="font-bold text-gray-100 mb-4">
                          {i.name}
                        </h2>
                        <ul className="text-gray-500 text-sm">
                          {i.links.map((l) => (
                            <li key={l.name} className="pt-1 pb-2">
                              {l.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <h2 className=" font-bold text-gray-100 mb-4">Our Newsletter</h2>
              <div className="text-gray-300 mb-8">
                Subscribe our weely Newsletter to get regular updates about our
                articles.
              </div>
              <div className="flex">
                <input
                  type="text"
                  className="rounded-l px-2 focus:outline-none"
                />
                <button className="text-gray-200 rounded-r bg-red-500 hover:bg-blue-500 px-4 py-2 focus:outline-none">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* icon for social media */}
      <div className="flex sm:justify-center xl:justify-center">
        {socialMedias.map((s) => {
          return (
            <>
              <a
                href={s.url}
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white bg-blue-100 hover:bg-blue-600 hover:border-blue-600"
              >
                <FontAwesomeIcon icon={s.icon} size="1x" />
              </a>
            </>
          );
        })}
      </div>
      <div>
        <div className="container mx-auto px-6 lg:px-20 py-3">
          <div className="flex font-light justify-center text-gray-400 text-sm">
            <p>© Bills Mowing, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
