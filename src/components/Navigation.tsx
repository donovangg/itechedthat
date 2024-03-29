import React from "react";
const categories = [
  {
    id: 1,
    category: "Fundamentals",
    subheader: "Skills for every game",
    path: "/fundamentals",
    imgSrc: "/assets/footsies.gif",
  },
  {
    id: 2,
    category: "Street Fighter",
    subheader: "They Buffed Ryu",
    path: "/street-fighter",
    imgSrc: "/assets/capcom.webp",
  },
  {
    id: 3,
    category: "French Bread",
    subheader: "Lord Kamone",
    path: "/french-bread",
  },
  {
    id: 4,
    category: "Airdashers/Anime",
    subheader: "Goodbye Wednesday Train",
    imgSrc: "/assets/mr-dolphin.webp",
    path: "/airdashers",
  },
];

const Navigation = () => {
  const currentURL = window.location.href;
  console.log(currentURL);
  return (
    <nav className="py-4 border-2 border-green-700">
      <ul className="flex flex-wrap justify-center gap-2 w-9/12 mx-auto h-full">
        {categories.map((cat) => (
          <li>
            <a
              href={cat.path}
              className={`nav-link border ${
                currentURL == cat.path ? "bg-pink-900" : "bg-transparent "
              } hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded-full transition ease-in`}
            >
              {cat.category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
