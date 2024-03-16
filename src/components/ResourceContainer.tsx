import React, { useState, useEffect } from "react";

interface ResourceProps {
  link: string;
  category: string;
  title: string;
  id: number;
}

interface ResourceContainerProps {
  resources: ResourceProps[];
}

const ResourceContainer = ({ resources }: ResourceContainerProps) => {
  const [filtered, setFiltered] = useState("All");
  return (
    <div>
      <h1>The resource container</h1>
      {resources.map((res) => (
        <article>
          <h2 className="text-white">{res.title}</h2>
        </article>
      ))}
    </div>
  );
};

export default ResourceContainer;
