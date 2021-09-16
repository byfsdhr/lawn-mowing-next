import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="py-40"
      //   TODO use images
      style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
          perfect lawn is just a call away
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          We’ll take care of your grass, so you can take care of everything else
        </h3>

        <Link href="/quote" passHref>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            get quote now
          </button>
        </Link>

      </div>
    </div>
  );
}
