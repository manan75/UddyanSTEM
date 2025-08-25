import React from "react";

const cards = [
  {
    title: "Web Design",
    description: "Crafts engaging, kid-friendly websites.",
    tags: ["Fun Layouts", "Games", "Colorful Pages"],
    image: "https://images.unsplash.com/photo-1618213837799-401e1a0c7ab2?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Graphic Design",
    description: "Creates bright and playful visuals.",
    tags: ["Cartoons", "Illustrations", "Color Splash"],
    image: "https://images.unsplash.com/photo-1625840163566-93f7e3bca229?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Developers",
    description: "Builds interactive and exciting projects.",
    tags: ["Games", "Apps", "Animations"],
    image: "https://images.unsplash.com/photo-1623089957594-5e7b6c5c6a2c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Story Writing",
    description: "Delivers fun and imaginative stories.",
    tags: ["Fairytales", "Adventure", "Creative Writing"],
    image: "https://images.unsplash.com/photo-1614850523425-bd36e25e5d07?auto=format&fit=crop&w=800&q=60",
  },
];

const Cards = () => {
  return (
    <section className="py-16 px-6 bg-[#D0EBFF]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-2xl shadow-md overflow-hidden flex flex-col justify-between transition-transform transform hover:scale-105"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="absolute inset-0 bg-white/70"></div>

            <div className="relative p-6 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 drop-shadow-md">
                {card.title}
              </h3>
              <p className="text-gray-800 mb-4 drop-shadow-sm">{card.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/80 text-gray-800 text-sm px-3 py-1 rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-auto flex items-center justify-between text-gray-900 font-semibold bg-white/80 px-4 py-2 rounded-xl shadow">
                Explore
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
