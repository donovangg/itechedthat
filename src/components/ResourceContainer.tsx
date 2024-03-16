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
  const [isLoading, setIsLoading] = useState(true);
  const [filteredResources, setFilteredResources] = useState<ResourceProps[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  // loading useEffect
  useEffect(() => {
    // Set isLoading to true for initial render of resources
    setIsLoading(!resources);
    // Initialize filteredResources with all resources
    setFilteredResources(resources);
  }, [resources]);

  // filter useEffect
  useEffect(() => {
    filterResources(selectedCategory);
  }, [selectedCategory]);

  const filterResources = (category: string) => {
    if (category === "All") {
      setFilteredResources(resources);
    } else {
      const filtered = resources.filter(
        (resource) => resource.category === category
      );
      setFilteredResources(filtered);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>The resource container</h1>
      <div>
        {/* Filter buttons */}
        <button onClick={() => handleCategoryChange("All")}>All</button>
        {/* Render filter buttons based on unique categories */}
        {Array.from(new Set(resources.map((res) => res.category))).map(
          (category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          )
        )}
      </div>
      {isLoading ? (
        // Conditional rendering based on isLoading state
        <p>Loading...</p>
      ) : (
        <>
          {filteredResources.map((res) => (
            <article key={res.id}>
              {" "}
              <h2 className="text-white">{res.title}</h2>
            </article>
          ))}
        </>
      )}
    </div>
  );
};

export default ResourceContainer;
