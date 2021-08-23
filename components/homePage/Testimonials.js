export default function Testimonial() {
  const testimonials = [
    {
      id:1,
      name: "John Doe",
      location:"",
      say: "Monitoring and tracking my health vitals anywhere I go and on any platform I use has never been easier.",
    },
    {
      id:2,
      name: "Trumph Doe",
      location:"",
      say: "As an Athlete, this is the perfect product for me. I wear my Smart Health Monitoring Wristwatch everywhere I go, even in the bathroom since it's waterproof.",
    },
    {
      id:3,
      name: "Yeo Ha",
      location:"",
      say: " I don't regret buying this wearble gadget. One of the best gadgets I own!.",
    },
  ];

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-10 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Testimonials
        </h2>
        <div className="flex flex-wrap">
          {testimonials.map((t) => {
            return (
              <div key={t.id} className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    {t.say}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    {t.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
