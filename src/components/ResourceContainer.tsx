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
      <div className="border-2 max-w-screen-2xl mx-auto flex gap-2">
        {/* Filter buttons */}
        <button
          className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-zinc-900 ${
            selectedCategory == "All" ? "bg-white text-zinc-950" : ""
          } px-6 font-medium text-neutral-200`}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </button>

        {/* Render filter buttons based on unique categories */}
        {Array.from(new Set(resources.map((res) => res.category))).map(
          (category) => (
            <button
              className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-zinc-900 ${
                category == selectedCategory ? "bg-white text-zinc-950" : ""
              } px-6 font-medium text-neutral-200`}
              key={category}
              onClick={() => handleCategoryChange(category)}
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
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
