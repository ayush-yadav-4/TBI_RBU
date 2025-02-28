import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,EffectCards } from 'swiper/modules';

const cardData = [
  { id: 1, title: "Card 1", description: "Description for Card 1", imageUrl: "/path/to/image1.jpg" },
  { id: 2, title: "Card 2", description: "Description for Card 2", imageUrl: "/path/to/image2.jpg" },
  { id: 3, title: "Card 3", description: "Description for Card 3", imageUrl: "/path/to/image3.jpg" },
  // Add more card data as needed
];

const Incubatedstartup = () => {
  return (
    <div className="flex flex-col lg:flex-row  bg-gray-200 mt-15">
      <div className="flex-1 flex flex-col justify-center items-center p-8 ">
        <h1 className="text-5xl text-center mb-12 font-bold text-gray-600">Ecosystem Partners</h1>
        <p className="text-xl text-gray-600 mb-4">
         Strong ecosystem partners are pivotal in enriching our incubator's network, fostering collaboration, and amplifying opportunities for mutual growth and innovation. By cultivating robust relationships with ecosystem partners, we enhance support networks, access expertise, and broaden opportunities for success and impact.
        </p>
        <button className="px-6 py-3 bg-blue-500 mt-8 text-white rounded-lg hover:bg-red-400 ">Learn More About TBI</button>
      </div>
      <div className="flex-1 flex justify-center items-center p-8 shadow-10">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="h-[300px] w-[250px] md:h-[400px] md:w-[550px]"
        >
          {cardData.map(card => (
            <SwiperSlide key={card.id} className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center justify-center p-4">
              <img src={card.imageUrl} alt={card.title} className="w-full h-32 object-cover rounded-t-lg mb-4 shadow-md" />
              <h2 className="text-xl font-semibold mb-1">{card.title}</h2>
              <p className="text-sm text-gray-500">{card.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Incubatedstartup;



