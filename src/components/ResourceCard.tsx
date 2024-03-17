import React from "react";

interface ResourceCardProps {
  id: number;
  title: string;
  link: string;
  category: string;
  imgSrc: string;
  description: string;
}

const ResourceCard = ({
  id,
  title,
  link,
  category,
  imgSrc,
  description,
}: ResourceCardProps) => {
  return (
    <article className="max-w-sm h-96 bg-zinc-800 rounded overflow-hidden shadow-lg">
      <figure>
        <img className="w-full" src={imgSrc} alt="Sunset in the mountains" />
      </figure>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {category}
        </span>
      </div>
    </article>
  );
};

export default ResourceCard;
