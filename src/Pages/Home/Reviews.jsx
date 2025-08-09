import React from 'react';
import Slider from 'react-slick';/* slick-carousel default styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Lost Phone Owner",
      text: "WhereIsIt helped me recover my lost phone in just two days! The community here is so helpful.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Mark Smith",
      role: "Helpful Finder",
      text: "I found a wallet in the park and listed it here. Within hours, the owner contacted me!",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      name: "Emily Carter",
      role: "Recovered Backpack",
      text: "This platform is a blessing. I got my backpack back with everything still inside!",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "David Lee",
      role: "Community Member",
      text: "Even if I haven’t lost anything, I keep checking. It’s great to help others out.",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section data-aos="fade-up" className="py-12 px-6 md:px-20  mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6">
          What  <span className="text-gray-800">People Say</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Hear from people who have used <span className="font-semibold text-purple-500">WhereIsIt</span>  
          — real stories of recovery, kindness, and community help.
        </p>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col items-center text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 object-cover rounded-full border-4 border-purple-300 shadow-md"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{review.name}</h3>
                <p className="text-sm text-purple-500 mb-3">{review.role}</p>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
